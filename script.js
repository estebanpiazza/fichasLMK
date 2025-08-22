// Configuración de Google Sheets
const CONFIG = {
    SPREADSHEET_ID: '1a4OCmOlZP3Z_kvECiCuplgfW7y_9R998lg_AK7Mk09A',
    SHEET_GID: '225555704' // GID de la hoja específica
};

// Variables globales
let allData = [];
let currentSubject = 'all';
let currentClassData = null;
let currentCourseClasses = [];

// Configurar Marked para renderizado seguro de Markdown
if (typeof marked !== 'undefined') {
    marked.setOptions({
        breaks: true,          // Convertir saltos de línea simples en <br>
        gfm: true,            // GitHub Flavored Markdown
        sanitize: false,      // No sanitizar HTML (para permitir elementos personalizados)
        smartLists: true,     // Listas inteligentes
        smartypants: true,    // Comillas y guiones inteligentes
        headerIds: false,     // No agregar IDs a headers
        mangle: false         // No codificar emails
    });
}

// Función para convertir URLs en hipervínculos
function linkifyUrls(text) {
    // Patrón para detectar URLs más completo
    const urlPattern = /(https?:\/\/[^\s<>"']+[^\s<>"'.,;:])/gi;
    
    // Evitar procesar URLs que ya están dentro de enlaces HTML
    if (text.includes('<a ') && text.includes('href=')) {
        return text;
    }
    
    return text.replace(urlPattern, (url) => {
        // Limpiar la URL de caracteres finales no deseados
        let cleanUrl = url.replace(/[.,;:)}\]]*$/, '');
        
        // Validar que la URL sea válida
        try {
            new URL(cleanUrl);
        } catch (e) {
            // Si no es una URL válida, retornar el texto original
            return url;
        }
        
        // Obtener el texto visible del enlace (más corto si es muy largo)
        let displayText = cleanUrl;
        
        // Crear un nombre más amigable para el enlace
        try {
            const urlObj = new URL(cleanUrl);
            let friendlyName = urlObj.hostname;
            
            // Agregar parte del path si existe y no es solo "/"
            if (urlObj.pathname && urlObj.pathname !== '/') {
                const pathParts = urlObj.pathname.split('/').filter(p => p);
                if (pathParts.length > 0) {
                    friendlyName += '/' + pathParts[pathParts.length - 1];
                }
            }
            
            // Limitar longitud del texto
            if (friendlyName.length > 45) {
                friendlyName = friendlyName.substring(0, 42) + '...';
            }
            
            displayText = friendlyName;
        } catch (e) {
            // Si falla el parsing, usar URL limitada
            if (displayText.length > 45) {
                displayText = displayText.substring(0, 42) + '...';
            }
        }
        
        return `<a href="${cleanUrl}" target="_blank" class="auto-link" title="${cleanUrl}">
            <i class="fas fa-external-link-alt"></i> ${displayText}
        </a>`;
    });
}

// Función para renderizar Markdown de forma segura
function renderMarkdown(text) {
    if (!text) {
        return 'No especificado';
    }
    
    // Limpiar el texto de caracteres extraños
    text = text.toString().trim();
    
    if (!text) {
        return 'No especificado';
    }
    
    // Convertir \n literales a saltos de línea reales
    text = text.replace(/\\n/g, '\n');
    
    // También convertir otros posibles caracteres de escape
    text = text.replace(/\\r/g, '\r');
    text = text.replace(/\\t/g, '\t');
    
    // Detectar si el texto contiene sintaxis Markdown clara
    const markdownIndicators = [
        /\*\*.*?\*\*/,            // Negritas **texto**
        /^#{1,6}\s+/m,            // Títulos # ## ###
        /^\*\s+/m,                // Listas * item
        /^-\s+/m,                 // Listas - item
        /^\d+\.\s+/m,             // Listas numeradas 1. item
        /\[.*?\]\(.*?\)/,         // Enlaces [texto](url)
        /^```[\s\S]*?```/m,       // Bloques de código
        /^>\s+/m                  // Citas > texto
    ];
    
    const hasMarkdown = markdownIndicators.some(regex => regex.test(text));
    const hasLineBreaks = text.includes('\n');
    
    // Si tiene Markdown claro Y saltos de línea, configurar marked para preservar saltos
    if (hasMarkdown && typeof marked !== 'undefined') {
        try {
            // Configurar marked para preservar saltos de línea si los hay
            const oldBreaks = marked.getDefaults().breaks;
            if (hasLineBreaks) {
                marked.setOptions({ breaks: true });
            }
            
            let result = marked.parse(text);
            
            // Restaurar configuración original
            marked.setOptions({ breaks: oldBreaks });
            
            // Solo aplicar linkificación de URLs si no hay enlaces de Markdown en el resultado
            if (!result.includes('<a ') || !result.includes('href=')) {
                result = linkifyUrls(result);
            }
            
            return result;
        } catch (error) {
            console.warn('Error renderizando Markdown:', error);
        }
    }
    
    // Para texto sin Markdown pero con saltos de línea, preservarlos manualmente
    let processedText = text;
    
    if (hasLineBreaks) {
        // Dividir por párrafos (dobles saltos de línea)
        const paragraphs = text.split(/\n\s*\n/);
        
        if (paragraphs.length > 1) {
            // Múltiples párrafos: cada uno en su propio <p>
            processedText = paragraphs
                .map(p => p.trim())
                .filter(p => p.length > 0)
                .map(p => `<p>${linkifyUrls(p.replace(/\n/g, '<br>'))}</p>`)
                .join('');
        } else {
            // Un solo párrafo: convertir saltos de línea a <br>
            processedText = `<p>${linkifyUrls(text.replace(/\n/g, '<br>'))}</p>`;
        }
    } else {
        // Texto simple sin saltos de línea
        processedText = `<p>${linkifyUrls(text)}</p>`;
    }
    
    return processedText;
}

// Función para obtener datos de Google Sheets (método público CSV)
async function fetchGoogleSheetsData() {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${CONFIG.SPREADSHEET_ID}/export?format=csv&gid=${CONFIG.SHEET_GID}`;
    
    try {
        const response = await fetch(csvUrl);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const csvText = await response.text();
        return parseCSV(csvText);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}

// Función para parsear CSV
function parseCSV(csvText) {
    // Dividir por líneas pero mantener los saltos de línea dentro de campos entrecomillados
    const result = [];
    let currentRow = '';
    let inQuotes = false;
    let lines = csvText.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Contar comillas en la línea para determinar si estamos dentro de un campo entrecomillado
        const quoteCount = (line.match(/"/g) || []).length;
        
        if (currentRow) {
            // Estamos construyendo una fila multilínea
            currentRow += '\n' + line;
        } else {
            currentRow = line;
        }
        
        // Determinar si estamos dentro de comillas
        const totalQuotes = (currentRow.match(/"/g) || []).length;
        inQuotes = (totalQuotes % 2) !== 0;
        
        // Si no estamos dentro de comillas y tenemos contenido, procesar la fila
        if (!inQuotes && currentRow.trim()) {
            const parsedRow = parseCSVLine(currentRow);
            if (parsedRow.length > 0) {
                result.push(parsedRow);
            }
            currentRow = '';
        }
    }
    
    // Procesar la última fila si quedó pendiente
    if (currentRow.trim()) {
        const parsedRow = parseCSVLine(currentRow);
        if (parsedRow.length > 0) {
            result.push(parsedRow);
        }
    }
    
    return result;
}

// Función para parsear una línea de CSV mejorada
// Maneja comillas dobles escapadas, comas dentro de campos y contenido multilínea
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    let i = 0;
    
    while (i < line.length) {
        const char = line[i];
        
        if (char === '"') {
            // Manejar comillas dobles escapadas
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i += 2; // Saltar ambas comillas
                continue;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // Procesar el campo actual
            let cleanValue = current.trim();
            
            // Limpiar comillas del inicio y final si las hay
            if (cleanValue.startsWith('"') && cleanValue.endsWith('"')) {
                cleanValue = cleanValue.slice(1, -1);
                // Reemplazar comillas dobles escapadas por comillas simples
                cleanValue = cleanValue.replace(/""/g, '"');
            }
            
            // Manejar campos marcados como "vacio"
            if (cleanValue.toLowerCase() === 'vacio') {
                cleanValue = '';
            }
            
            result.push(cleanValue);
            current = '';
        } else {
            current += char;
        }
        i++;
    }
    
    // Procesar el último campo
    let cleanValue = current.trim();
    if (cleanValue.startsWith('"') && cleanValue.endsWith('"')) {
        cleanValue = cleanValue.slice(1, -1);
        // Reemplazar comillas dobles escapadas por comillas simples
        cleanValue = cleanValue.replace(/""/g, '"');
    }
    
    // Manejar campos marcados como "vacio"
    if (cleanValue.toLowerCase() === 'vacio') {
        cleanValue = '';
    }
    
    result.push(cleanValue);
    
    return result;
}

// Función para procesar los datos del sheet
function processSheetData(rawData) {
    if (rawData.length === 0) return [];

    // Asumir que la primera fila son los encabezados
    const headers = rawData[0];
    const processedData = [];

    // Mapear encabezados a índices con mayor flexibilidad
    const headerMap = {
        marcaTemporal: headers.findIndex(h => h.toLowerCase().includes('marca') && h.toLowerCase().includes('temporal')),
        email: headers.findIndex(h => h.toLowerCase().includes('correo') || h.toLowerCase().includes('email')),
        materia: headers.findIndex(h => h.toLowerCase().includes('materia')),
        profesor: headers.findIndex(h => h.toLowerCase().includes('profesor')),
        curso: headers.findIndex(h => h.toLowerCase().includes('curso')),
        año: headers.findIndex(h => h.toLowerCase().includes('año')),
        cuatrimestre: headers.findIndex(h => h.toLowerCase().includes('cuatrimestre')),
        numeroClase: headers.findIndex(h => h.toLowerCase().includes('numero') && h.toLowerCase().includes('clase')),
        contenidoTeorico: headers.findIndex(h => h.toLowerCase().includes('contenido') && h.toLowerCase().includes('teorico')),
        contenidoPractico: headers.findIndex(h => h.toLowerCase().includes('contenido') && h.toLowerCase().includes('practico')),
        recursos: headers.findIndex(h => h.toLowerCase().includes('recursos')),
        extra: headers.findIndex(h => h.toLowerCase().includes('extra')),
        alumnosEncargados: headers.findIndex(h => h.toLowerCase().includes('alumnos') && h.toLowerCase().includes('encargados'))
    };

    // Procesar cada fila (saltando la primera que son los encabezados)
    for (let i = 1; i < rawData.length; i++) {
        const row = rawData[i];
        
        // Saltar filas vacías o que no tengan materia
        if (!row || row.length === 0 || !row[headerMap.materia] || row[headerMap.materia].trim() === '') continue;

        const classData = {
            marcaTemporal: row[headerMap.marcaTemporal] || '',
            email: row[headerMap.email] || '',
            materia: row[headerMap.materia] || '',
            profesor: row[headerMap.profesor] || '',
            curso: row[headerMap.curso] || '',
            año: row[headerMap.año] || '',
            cuatrimestre: row[headerMap.cuatrimestre] || '',
            numeroClase: parseInt(row[headerMap.numeroClase]) || 0,
            contenidoTeorico: row[headerMap.contenidoTeorico] || '',
            contenidoPractico: row[headerMap.contenidoPractico] || '',
            recursos: row[headerMap.recursos] || '',
            extra: row[headerMap.extra] || '',
            alumnosEncargados: row[headerMap.alumnosEncargados] || ''
        };

        processedData.push(classData);
    }

    return processedData;
}

// Función para cargar los datos
async function loadData() {
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('errorMessage');
    const subjectsSection = document.getElementById('subjectsSection');
    
    // Mostrar loading
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    subjectsSection.innerHTML = '';
    
    try {
        const rawData = await fetchGoogleSheetsData();
        allData = processSheetData(rawData);
        
        if (allData.length === 0) {
            throw new Error('No se encontraron datos válidos');
        }
        
        renderFilterButtons();
        renderSubjects();
        
        loadingElement.style.display = 'none';
    } catch (error) {
        console.error('Error cargando datos:', error);
        loadingElement.style.display = 'none';
        errorElement.style.display = 'block';
    }
}

// Función para generar botones de filtro
function renderFilterButtons() {
    const filterButtons = document.getElementById('filterButtons');
    const subjects = [...new Set(allData.map(item => item.materia))].sort();
    
    filterButtons.innerHTML = `
        <button class="filter-btn active" data-filter="all">Todas las Materias</button>
        ${subjects.map(subject => 
            `<button class="filter-btn" data-filter="${subject}">${subject}</button>`
        ).join('')}
    `;
    
    // Agregar event listeners
    filterButtons.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remover clase activa de todos los botones
            filterButtons.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Agregar clase activa al botón clickeado
            e.target.classList.add('active');
            
            currentSubject = e.target.dataset.filter;
            renderSubjects();
        });
    });
}

// Función para renderizar las materias
function renderSubjects() {
    const subjectsSection = document.getElementById('subjectsSection');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Filtrar datos según búsqueda y filtro de materia
    let filteredData = allData.filter(item => {
        const matchesSearch = item.materia.toLowerCase().includes(searchTerm) ||
                            item.profesor.toLowerCase().includes(searchTerm) ||
                            item.curso.toLowerCase().includes(searchTerm) ||
                            (item.alumnosEncargados && item.alumnosEncargados.toLowerCase().includes(searchTerm)) ||
                            (item.contenidoTeorico && item.contenidoTeorico.toLowerCase().includes(searchTerm)) ||
                            (item.contenidoPractico && item.contenidoPractico.toLowerCase().includes(searchTerm));
        
        const matchesSubject = currentSubject === 'all' || item.materia === currentSubject;
        
        return matchesSearch && matchesSubject;
    });
    
    // Agrupar por materia (no por curso)
    const groupedBySubject = filteredData.reduce((acc, item) => {
        if (!acc[item.materia]) {
            acc[item.materia] = {};
        }
        if (!acc[item.materia][item.curso]) {
            acc[item.materia][item.curso] = [];
        }
        acc[item.materia][item.curso].push(item);
        return acc;
    }, {});

    // Renderizar HTML agrupado por materia
    subjectsSection.innerHTML = Object.keys(groupedBySubject).sort().map(subject => {
        const courses = groupedBySubject[subject];
        const totalCourses = Object.keys(courses).length;
        
        return `
            <div class="subject-group collapsed" data-subject="${subject}">
                <div class="subject-header" onclick="toggleSubject('${subject}')">
                    <div class="subject-header-content">
                        <h3 class="subject-title">${subject}</h3>
                        <p class="subject-subtitle">${totalCourses} curso${totalCourses !== 1 ? 's' : ''}</p>
                    </div>
                    <div class="subject-toggle">
                        <span class="subject-count">${Object.values(courses).reduce((total, classes) => total + classes.length, 0)} clases</span>
                        <i class="fas fa-chevron-down chevron"></i>
                    </div>
                </div>
                <div class="courses-grid">
                    ${Object.keys(courses).sort().map(course => {
                        const classes = courses[course].sort((a, b) => a.numeroClase - b.numeroClase);
                        const firstClass = classes[0];
                        
                        return createCourseCard(course, firstClass, classes.length);
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    // Si no hay resultados
    if (Object.keys(groupedBySubject).length === 0) {
        subjectsSection.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--gray-dark);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>No se encontraron resultados</h3>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
    }
}

// Función para crear tarjeta de curso compacta
function createCourseCard(courseName, firstClass, classCount) {
    return `
        <div class="course-card" onclick="openCourseClasses('${courseName}', '${firstClass.materia}')">
            <div class="course-header">
                <div class="course-name">${courseName}</div>
                <div class="course-details">
                    <span class="course-badge">${firstClass.año}</span>
                    <span class="course-badge">${firstClass.cuatrimestre}</span>
                </div>
                <div class="course-professor">
                    <i class="fas fa-user-tie"></i>
                    ${firstClass.profesor}
                </div>
            </div>
            <div class="course-stats">
                <span class="class-count">
                    <i class="fas fa-list"></i>
                    ${classCount} clase${classCount !== 1 ? 's' : ''}
                </span>
                <button class="view-classes-btn" onclick="event.stopPropagation(); openCourseClasses('${courseName}', '${firstClass.materia}')">
                    Ver clases
                </button>
            </div>
        </div>
    `;
}

// Función para abrir las clases de un curso específico
function openCourseClasses(courseName, subjectName) {
    // Filtrar clases del curso específico
    const courseClasses = allData.filter(item => item.curso === courseName);
    
    if (courseClasses.length === 0) {
        return;
    }
    
    // Ordenar por número de clase
    courseClasses.sort((a, b) => a.numeroClase - b.numeroClase);
    
    // Abrir modal con la primera clase
    currentCourseClasses = courseClasses;
    currentClassData = courseClasses[0];
    
    // Abrir modal
    openClassModal(currentClassData);
}

// Función para crear preview de texto sin Markdown
function createTextPreview(text, maxLength = 100) {
    if (!text) return '';
    
    // Remover sintaxis básica de Markdown para el preview
    let cleanText = text
        .replace(/\*\*(.*?)\*\*/g, '$1')  // Remover negritas
        .replace(/\*(.*?)\*/g, '$1')      // Remover cursivas
        .replace(/_(.*?)_/g, '$1')        // Remover cursivas con _
        .replace(/`(.*?)`/g, '$1')        // Remover código inline
        .replace(/#{1,6}\s+/g, '')        // Remover títulos
        .replace(/^\*\s+/gm, '• ')        // Convertir listas * a •
        .replace(/^-\s+/gm, '• ')         // Convertir listas - a •
        .replace(/^\d+\.\s+/gm, '')       // Remover numeración de listas
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Mostrar solo texto de enlaces
        .replace(/^>\s+/gm, '')           // Remover citas
        .replace(/\n+/g, ' ')             // Convertir saltos de línea a espacios
        .trim();
    
    if (cleanText.length > maxLength) {
        return cleanText.substring(0, maxLength) + '...';
    }
    
    return cleanText;
}

// Función para crear tarjeta de clase
function createClassCard(classItem) {
    const preview = createTextPreview(classItem.contenidoTeorico, 100);
    
    // Preparar información adicional si está disponible
    let additionalInfo = '';
    if (classItem.alumnosEncargados && classItem.alumnosEncargados.trim()) {
        additionalInfo = `
            <div class="class-students">
                <i class="fas fa-users"></i>
                ${classItem.alumnosEncargados}
            </div>
        `;
    }
    
    return `
        <div class="class-card" onclick="openClassModal(${JSON.stringify(classItem).replace(/"/g, '&quot;')})">
            <div class="class-header">
                <div class="class-info">
                    <div class="class-course">${classItem.materia}</div>
                    <div class="class-details">
                        <span class="class-badge">${classItem.año}</span>
                        <span class="class-badge">${classItem.cuatrimestre}</span>
                    </div>
                    <div class="class-professor">
                        <i class="fas fa-user-tie"></i>
                        ${classItem.profesor}
                    </div>
                    ${additionalInfo}
                </div>
                <div class="class-number">
                    Clase ${classItem.numeroClase}
                </div>
            </div>
            <div class="class-preview">${preview}</div>
        </div>
    `;
}

// Función para alternar visibilidad de materias
function toggleSubject(subject) {
    const subjectGroup = document.querySelector(`[data-subject="${subject}"]`);
    if (subjectGroup) {
        subjectGroup.classList.toggle('collapsed');
    }
}

// Función para abrir modal de clase
function openClassModal(classData) {
    const modal = document.getElementById('classModal');
    
    // Guardar datos actuales y obtener todas las clases del mismo curso
    currentClassData = classData;
    currentCourseClasses = allData
        .filter(item => item.curso === classData.curso)
        .sort((a, b) => a.numeroClase - b.numeroClase);
    
    // Mostrar los datos de la clase
    displayClassData(classData);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
}

// Función para mostrar los datos de una clase en el modal
function displayClassData(classData) {
    // Llenar datos del modal
    document.getElementById('modalTitle').textContent = `${classData.curso} - Clase ${classData.numeroClase}`;
    document.getElementById('modalCourse').textContent = classData.materia;
    document.getElementById('modalYear').textContent = classData.año;
    document.getElementById('modalQuarter').textContent = `${classData.cuatrimestre}° Cuatrimestre`;
    document.getElementById('modalProfessor').textContent = classData.profesor;
    document.getElementById('modalClassNumber').textContent = classData.numeroClase;
    
    // Mostrar alumnos encargados si existe
    const studentsSection = document.getElementById('studentsSection');
    const modalStudents = document.getElementById('modalStudents');
    if (classData.alumnosEncargados && classData.alumnosEncargados.trim()) {
        modalStudents.textContent = classData.alumnosEncargados;
        studentsSection.style.display = 'block';
    } else {
        studentsSection.style.display = 'none';
    }
    
    // Renderizar contenido con soporte para Markdown
    document.getElementById('modalTheoreticalContent').innerHTML = renderMarkdown(classData.contenidoTeorico);
    document.getElementById('modalPracticalContent').innerHTML = renderMarkdown(classData.contenidoPractico);
    
    // Procesar recursos con detección automática de URLs
    const resourcesContainer = document.getElementById('modalResources');
    if (classData.recursos && classData.recursos.trim()) {
        // Primero intentar renderizar como Markdown (que incluye linkificación automática)
        const renderedResources = renderMarkdown(classData.recursos);
        
        // Verificar si parece ser una lista separada por comas o saltos de línea
        const originalText = classData.recursos.trim();
        const hasCommas = originalText.includes(',') && !originalText.includes('\n');
        const hasMarkdownSyntax = /\*\*|##|###|\[.*\]\(.*\)|\*\s+|-\s+/.test(originalText);
        
        if (hasCommas && !hasMarkdownSyntax) {
            // Manejar como lista de recursos separados por comas
            const resources = originalText.split(',').map(r => r.trim()).filter(r => r);
            resourcesContainer.innerHTML = resources.map(resource => {
                // Detectar si es un URL usando patrón más robusto
                const urlPattern = /^https?:\/\/[^\s]+$/i;
                if (urlPattern.test(resource)) {
                    // Obtener nombre más amigable del URL
                    let displayName = resource;
                    try {
                        const url = new URL(resource);
                        displayName = url.hostname + (url.pathname !== '/' ? url.pathname : '');
                        if (displayName.length > 40) {
                            displayName = displayName.substring(0, 37) + '...';
                        }
                    } catch (e) {
                        // Si falla el parsing del URL, usar el recurso original
                        if (resource.length > 40) {
                            displayName = resource.substring(0, 37) + '...';
                        }
                    }
                    
                    return `<a href="${resource}" target="_blank" class="resource-link" title="${resource}">
                        <i class="fas fa-external-link-alt"></i>
                        ${displayName}
                    </a>`;
                } else {
                    // Para texto que no es URL, aplicar linkificación automática
                    const linkedResource = linkifyUrls(resource);
                    return `<div class="resource-item">
                        <i class="fas fa-file"></i>
                        ${linkedResource}
                    </div>`;
                }
            }).join('');
        } else {
            // Usar el contenido renderizado con Markdown y linkificación automática
            resourcesContainer.innerHTML = `<div class="markdown-content">${renderedResources}</div>`;
        }
    } else {
        resourcesContainer.innerHTML = '<p>No hay recursos especificados</p>';
    }
    
    // Mostrar sección extra si existe, con soporte para Markdown
    const extraSection = document.getElementById('extraSection');
    const modalExtra = document.getElementById('modalExtra');
    if (classData.extra && classData.extra.trim()) {
        modalExtra.innerHTML = renderMarkdown(classData.extra);
        extraSection.style.display = 'block';
    } else {
        extraSection.style.display = 'none';
    }
    
    // Actualizar navegación
    updateNavigation(classData);
}

// Función para actualizar los botones de navegación
function updateNavigation(classData) {
    const currentIndex = currentCourseClasses.findIndex(c => c.numeroClase === classData.numeroClase);
    const prevBtn = document.getElementById('prevClassBtn');
    const nextBtn = document.getElementById('nextClassBtn');
    const position = document.getElementById('classPosition');
    
    // Actualizar posición
    position.textContent = `${currentIndex + 1} de ${currentCourseClasses.length}`;
    
    // Habilitar/deshabilitar botones
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentCourseClasses.length - 1;
}

// Función para navegar entre clases
function navigateClass(direction) {
    const currentIndex = currentCourseClasses.findIndex(c => c.numeroClase === currentClassData.numeroClase);
    let newIndex;
    
    if (direction === 'prev') {
        newIndex = currentIndex - 1;
    } else {
        newIndex = currentIndex + 1;
    }
    
    // Verificar límites
    if (newIndex >= 0 && newIndex < currentCourseClasses.length) {
        currentClassData = currentCourseClasses[newIndex];
        displayClassData(currentClassData);
    }
}

// Función para cerrar modal
function closeModal() {
    document.getElementById('classModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del fondo
    currentClassData = null;
    currentCourseClasses = [];
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Configurar búsqueda
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderSubjects();
        }, 300);
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('classModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Manejar tecla Escape para cerrar modal y flechas para navegar
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        } else if (currentClassData && document.getElementById('classModal').style.display === 'block') {
            // Navegación con teclas de flecha solo si el modal está abierto
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                navigateClass('prev');
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                navigateClass('next');
            }
        }
    });
    
    // Cargar datos automáticamente
    loadData();
});

// Función para cargar datos de ejemplo (para pruebas)
function loadSampleData() {
    allData = SAMPLE_DATA;
    renderFilterButtons();
    renderSubjects();
    document.getElementById('loading').style.display = 'none';
}
