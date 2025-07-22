# 📖 Manual de Formateo para Google Sheets

## 🎯 Resumen rápido
En Google Sheets, para que el texto se vea correctamente en la web:
- Usa `\n` para saltos de línea (NO presiones Enter)
- Usa `\n\n` para separar párrafos
- Combina con sintaxis Markdown para formato avanzado

## 📝 Sintaxis básica

### ✅ Saltos de línea
```
Línea 1\nLínea 2\nLínea 3
```
**Resultado:**
```
Línea 1
Línea 2
Línea 3
```

### ✅ Párrafos separados
```
Primer párrafo\n\nSegundo párrafo\n\nTercer párrafo
```

### ✅ Títulos
```
## Título Principal\n### Subtítulo\n#### Subtítulo menor
```

### ✅ Texto con formato
```
**Texto en negrita**\n*Texto en cursiva*\n`Código inline`
```

### ✅ Listas
```
### Lista:\n* Elemento 1\n* Elemento 2\n* Elemento 3\n\n### Numerada:\n1. Punto 1\n2. Punto 2
```

### ✅ Código
```
```python\nlado = int(input("Lado:"))\narea = lado * lado\nprint(area)\n```
```

### ✅ Enlaces
```
Visita [Google](https://google.com) para más información
```

### ✅ Citas
```
> Esta es una cita importante\n> que puede tener varias líneas
```

## 📚 Ejemplos por campo

### 🔬 Contenido Teórico
```
## Diagrama de flujo en Python\n\n**Definición:**\nHerramienta para plantear soluciones a problemas.\n\n### Características:\n* Representación visual\n* Fácil comprensión\n* Base para codificación\n\n```python\ncodigo = "ejemplo"\nprint(codigo)\n```
```

### 🛠️ Contenido Práctico  
```
### Ejercicio 1: Calcular área\n\n**Objetivo:** Crear algoritmo para área del cuadrado.\n\n**Pasos:**\n1. Solicitar lado\n2. Calcular: área = lado²\n3. Mostrar resultado\n\n**Tiempo:** 20 minutos\n\n### Implementación:\n```python\nlado = int(input("Lado: "))\nprint(f"Área: {lado**2}")\n```
```

### 🔗 Recursos
```
### Enlaces útiles:\n[Python.org](https://python.org)\n[Tutorial Algoritmos](https://ejemplo.com)\n\n### Herramientas:\n* Editor online: repl.it\n* Diagramas: draw.io\n* Documentación oficial
```

### ➕ Extra
```
### ¿Sabías que...?\n\nEl término "algoritmo" viene del matemático Al-Juarismi (siglo IX).\n\n### Para profundizar:\n* Complejidad algorítmica\n* Algoritmos de ordenamiento\n* Estructuras de datos
```

## ❌ Errores comunes

### ❌ NO hagas esto:
- Presionar Enter en Google Sheets (crea celdas nuevas)
- Usar espacios múltiples para formato
- Olvidar el `\n` entre líneas
- Mezclar formatos inconsistentemente

### ✅ SÍ haz esto:
- Siempre usar `\n` para nuevas líneas
- Usar `\n\n` para párrafos
- Combinar Markdown con saltos de línea
- Mantener consistencia en el formato

## 🎨 Resultado visual

Tu contenido se verá así:
- **Títulos:** Verde oscuro, tipografía destacada
- **Negrita:** Verde principal  
- **Código:** Fondo verde claro, fuente monospace
- **Enlaces:** Rojo con efectos hover
- **Listas:** Viñetas formateadas
- **Citas:** Borde izquierdo rojo

## 🚀 Ejemplo completo

**En Google Sheets escribes:**
```
## Clase 1: Variables\n\n**Objetivo:**\nAprender a declarar variables en Python.\n\n### Tipos de datos:\n* Enteros (int)\n* Texto (str)\n* Decimales (float)\n\n### Ejemplo:\n```python\nnombre = "Juan"\nedad = 25\nsalario = 2500.50\n```\n\n> **Importante:** Las variables son fundamentales en programación.
```

**En la web se verá como:**

## Clase 1: Variables

**Objetivo:**
Aprender a declarar variables en Python.

### Tipos de datos:
* Enteros (int)
* Texto (str)  
* Decimales (float)

### Ejemplo:
```python
nombre = "Juan"
edad = 25
salario = 2500.50
```

> **Importante:** Las variables son fundamentales en programación.
