# Sitio Web Oficial - Imagen Eliana (Copias, Impresiones y Diseños)

Sitio web moderno, responsivo y de alto impacto visual para el negocio **Imagen Eliana**, diseñado con la paleta de colores corporativa solicitada: **Fucsia / Magenta**, **Amarillo**, **Negro** y toques de **Cian** (identidad CMYK de imprenta).

---

## 🚀 Cómo Abrir y Ver la Página

1. Ve a la carpeta del proyecto: `c:\Users\User\Documents\Programacion\`
2. Haz doble clic en el archivo [**index.html**](file:///c:/Users/User/Documents/Programacion/index.html) para abrirlo directamente en tu navegador favorito (Google Chrome, Microsoft Edge, Firefox, etc.).
3. ¡Listo! La web no requiere instalación de servidores ni dependencias para funcionar localmente.

---

## 🎨 Paleta de Colores Aplicada
- **Fucsia / Magenta Principal:** `#E6007A`
- **Amarillo Brillante:** `#FFE600`
- **Negro Obsidiana / Fondo Oscuro:** `#0B0B10` y `#181824`
- **Cian Complementario (CMYK):** `#00B4D8`

---

## 📦 Estructura de Archivos

```
Programacion/
│
├── index.html                  # Página principal completa
│
├── css/
│   └── styles.css              # Estilos visuales, animaciones y diseño responsivo
│
├── js/
│   ├── prices-config.js        # CONFIGURACIÓN DE PRECIOS Y DATOS DE CONTACTO (¡Fácil de editar!)
│   └── main.js                 # Lógica interactiva, filtros, cotizador WhatsApp y modales
│
├── assets/
│   └── images/                 # Volantes y artes del negocio
│       ├── flyer-impresiones.jpg
│       ├── flyer-diseno-grafico.jpg
│       ├── flyer-tarjetas-volantes.jpg
│       ├── flyer-imantados.jpg
│       └── flyer-cabinas-libreria.jpg
│
└── README.md                   # Esta guía
```

---

## 💵 Cómo Actualizar los Precios Más Adelante

Tienes **dos opciones muy sencillas**:

### Opción 1: Desde el archivo de configuración (Recomendado y permanente)
Abre el archivo [**js/prices-config.js**](file:///c:/Users/User/Documents/Programacion/js/prices-config.js) en cualquier editor de texto o aquí en Antigravity. Encontrarás cada servicio con su precio actual `"[Por definir]"`:

```javascript
{
  id: "imp-a4-color",
  nombre: "Impresión A4 Color",
  descripcion: "Papel bond o fotográfico, gráficos e imágenes nítidas.",
  unidad: "por hoja",
  precio: "S/ 0.80",   // <-- Solo cambias este valor
  destacado: true
}
```

### Opción 2: Desde el Editor Rápido en Vivo dentro de la Web
1. En la página web, ve a la sección **"Precios & Cotizador"**.
2. Haz clic en el botón amarillo **"Abrir Editor de Precios Rápido"**.
3. Escribe los montos directamente y haz clic en **"Aplicar en la Web Ahora"**. Se guardarán inmediatamente en tu navegador.

---

## 📍 Cómo Personalizar la Ubicación Exacta

En [**js/prices-config.js**](file:///c:/Users/User/Documents/Programacion/js/prices-config.js), en la sección `contacto`:
```javascript
contacto: {
  whatsapp: "990595353",
  direccion: "Tu dirección aquí",
  referencia: "Referencia para llegar",
  horario: "Lunes a Sábado: 8:00 AM - 9:00 PM | Domingos: 9:00 AM - 3:00 PM"
}
```

---

## 📱 Funcionalidades Destacadas
- **Cotizador Express para WhatsApp:** El cliente elige el servicio, la cantidad y un botón le abre automáticamente WhatsApp con el mensaje listo para enviar al número **990 595 353**.
- **Filtro de Servicios:** Pestañas interactivas para ver Impresiones, Acabados, Diseño Gráfico, Tarjetas/Imantados y Cabinas/Librería.
- **Galería de Volantes con Zoom:** Permite a los clientes ver los volantes que subiste en grande y consultar directamente por ese producto.
- **Botón Flotante de WhatsApp:** Con animación para maximizar los contactos directos.
- **100% Adaptada a Celulares, Tablets y Computadoras.**
