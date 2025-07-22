# Sistema de Fichas - Limerick Bilingual School

Un sistema web para gestionar y visualizar clases organizadas por materias, conectado con Google Sheets.

## Características

- **Interfaz moderna** con la identidad visual de Limerick Bilingual School
- **Conexión con Google Sheets** para datos actualizados en tiempo real
- **Sistema de fichas** organizadas por materia y número de clase
- **Filtros de búsqueda** por materia
- **Navegación fluida** con modal de detalles
- **Diseño responsive** para todos los dispositivos

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

#### 📝 **Enlaces**
```
Visita [Google](https://google.com) para más información
```

#### 📝 **Citas**
```
> Esta es una cita importante\n> que puede ocupar varias líneas
```

### 📋 **Ejemplos prácticos para el contenido teórico:**

**Ejemplo 1 - Contenido simple con saltos de línea:**
```
Diagrama de flujo y codificación en Python\n\nDefinición:\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas.\n\nUna vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.
```

**Ejemplo 2 - Contenido con Markdown completo:**
```
## Diagrama de flujo y codificación en Python\n\n**Definición:**\nEl diagrama de flujo es una herramienta para plantear soluciones a problemas. Una vez diseñado el diagrama, se puede codificar en Python para comprobar su funcionamiento.\n\n### Características principales:\n* Representación visual de algoritmos\n* Fácil comprensión\n* Base para la codificación\n\n## Problema: Superficie de un cuadrado\n\n**Definición:**\nSe plantea el problema de hallar la superficie de un cuadrado conociendo el valor de uno de sus lados.\n\n**Ejemplo de código:**\n```python\nlado = int(input("Ingrese la medida del lado del cuadrado:"))\nsuperficie = lado * lado\nprint("La superficie del cuadrado es")\nprint(superficie)\n```\n\n> **Nota importante:** Se comienza con problemas sencillos para implementar el diagrama de flujo.
```

## 📚 Ejemplos de Formateo por Campo

### 🔬 **Contenido Teórico**
Ideal para explicaciones detalladas con estructura:
```
## Introducción a Algoritmos\n\n**Definición:**\nUn algoritmo es una secuencia finita de instrucciones bien definidas.\n\n### Características:\n* Finitud: Debe terminar en un número finito de pasos\n* Precisión: Cada instrucción debe ser clara\n* Entrada: Puede tener cero o más entradas\n* Salida: Debe producir al menos una salida\n\n### Ejemplo básico:\n```python\n# Algoritmo para sumar dos números\ndef sumar(a, b):\n    return a + b\n```\n\n> **Nota:** Los algoritmos son la base de la programación.
```

### 🛠️ **Contenido Práctico**
Perfecto para ejercicios y actividades:
```
### Ejercicio 1: Crear un diagrama de flujo\n\n**Objetivo:** Diseñar un algoritmo para calcular el área de un círculo.\n\n**Pasos a seguir:**\n1. Solicitar el radio al usuario\n2. Aplicar la fórmula: área = π × radio²\n3. Mostrar el resultado\n\n**Herramientas necesarias:**\n* Papel y lápiz\n* Software de diagramas (opcional)\n\n### Ejercicio 2: Implementación en Python\n\n```python\nimport math\n\nradio = float(input("Ingrese el radio: "))\narea = math.pi * radio ** 2\nprint(f"El área es: {area:.2f}")\n```\n\n**Tiempo estimado:** 30 minutos
```

### 🔗 **Recursos**
Para enlaces y materiales de apoyo:
```
### Documentación oficial\n[Python.org](https://python.org)\n\n### Videos recomendados\n[Curso de Algoritmos - YouTube](https://youtube.com/watch?v=ejemplo)\n\n### Libros de referencia\n* "Algoritmos y Estructuras de Datos" - Autor\n* "Python para Principiantes" - Autor\n\n### Herramientas online\n* [Online Python Compiler](https://repl.it)\n* [Flowchart Maker](https://draw.io)
```

### ➕ **Extra**
Para información adicional o curiosidades:
```
### ¿Sabías que...?\n\nEl término "algoritmo" proviene del matemático persa Al-Juarismi del siglo IX.\n\n### Dato curioso\nEl primer algoritmo documentado se remonta al año 300 a.C. y fue diseñado por Euclides para encontrar el máximo común divisor.\n\n### Para profundizar\nSi te interesa el tema, puedes investigar sobre:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos avanzadas
```

## 🎨 Resultado Visual

Con el formateo correcto, tu contenido se verá así en la web:

- **Títulos** aparecerán en verde oscuro con tipografía destacada
- **Texto en negrita** se mostrará en verde principal  
- **Código** tendrá fondo verde claro con fuente monospace
- **Enlaces** aparecerán en rojo con hover effects
- **Listas** tendrán viñetas bien formateadas
- **Citas** tendrán borde izquierdo rojo y fondo suave

## Configuración de Google Sheets

### Paso 1: Crear/Configurar tu Google Sheet

Tu planilla debe tener los siguientes encabezados en la primera fila:

| Materia | Profesor | Curso | Año | Cuatrimestre | Numero de Clase | Contenido teorico | Contenido practico | Recursos | Extra |

### Paso 2: Formateo de Contenido con Markdown

El sistema soporta **Markdown** y **saltos de línea** en los campos de contenido. Aquí te explicamos cómo formatear correctamente:

#### 📝 **Saltos de línea simples**
Para crear saltos de línea, usa `\n` en tu texto:
```
Línea 1\nLínea 2\nLínea 3
```
Se renderizará como:
```
Línea 1
Línea 2  
Línea 3
```

#### 📝 **Párrafos separados**
Para crear párrafos separados, usa `\n\n`:
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

#### 📝 **Títulos y subtítulos**
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor\nContenido normal
```

#### 📝 **Texto con formato**
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

#### 📝 **Listas**
```
### Lista de elementos:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Lista numerada:\n1. Primer punto\n2. Segundo punto\n3. Tercer punto
```

#### 📝 **Código**
Para bloques de código:
```
```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

####