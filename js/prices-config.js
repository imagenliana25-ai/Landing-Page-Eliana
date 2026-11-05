/**
 * ====================================================================
 * CONFIGURACIÓN DE PRECIOS Y SERVICIOS - "IMAGEN ELIANA"
 * ====================================================================
 * Aquí puedes cambiar los precios fácilmente en cualquier momento.
 * Solo cambia el valor de "precio" por el monto que desees (ej: "S/ 0.20", "S/ 45.00", etc.)
 * Si un precio aún no está definido, puedes dejarlo como "Consultar" o "[Por definir]".
 */

const PRECIOS_CONFIG = {
  simboloMoneda: "S/",
  
  categorias: [
    {
      id: "impresiones",
      nombre: "Impresiones & Copias",
      icono: "fa-solid fa-print",
      descripcion: "Calidad láser e inyección de tinta en diversos tipos de papel y formatos.",
      servicios: [
        {
          id: "imp-a4-bn",
          nombre: "Impresiones / Copias A4 Blanco y Negro",
          descripcion: "Papel bond 75g y 80g, texto ultra nítido a alta velocidad.",
          unidad: "por hoja / cara",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "imp-a4-color",
          nombre: "Impresiones A4 a Color",
          descripcion: "Colores vivos y gran definición en papel bond o fotográfico.",
          unidad: "por hoja",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "imp-a3-color",
          nombre: "Impresiones A3 Full Color",
          descripcion: "Gran formato para planos, láminas, infografías y pósters.",
          unidad: "por unidad",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "imp-papel-couche",
          nombre: "Impresión en Papel Couché",
          descripcion: "Acabado brillante o mate (150g - 300g) para catálogos y presentaciones.",
          unidad: "por pliego / hoja",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "imp-cartulina-opalina",
          nombre: "Impresión en Cartulina Opalina",
          descripcion: "Textura lisa y elegante para diplomas, certificados e invitaciones.",
          unidad: "por hoja",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "stickers-etiquetas",
          nombre: "Stickers y Etiquetas Autoadhesivas",
          descripcion: "Papel fotográfico adhesivo o vinil troquelado para etiquetas y empaques.",
          unidad: "por plancha A4",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "escaneo-documentos",
          nombre: "Escaneo de Documentos",
          descripcion: "Digitalización óptica en alta resolución. Entrega en PDF o JPG.",
          unidad: "por documento",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "tipeo-redaccion",
          nombre: "Tipeo y Redacción de Trabajos",
          descripcion: "Transcripción de textos, monografías, cartas notariales y formatos oficiales.",
          unidad: "por hoja",
          precio: "[Por definir]",
          destacado: false
        }
      ]
    },

    {
      id: "acabados",
      nombre: "Acabados & Enmicados",
      icono: "fa-solid fa-book-open",
      descripcion: "Protección y presentación formal para tus documentos y proyectos.",
      servicios: [
        {
          id: "anillados-espiralados",
          nombre: "Anillados / Espiralados",
          descripcion: "Espiral de plástico resistente con carátulas transparentes o de color.",
          unidad: "por unidad",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "enmicados-carnet",
          nombre: "Enmicados / Plastificados Carnet",
          descripcion: "Mica gruesa termosellada e impermeable para fotochecks y credenciales.",
          unidad: "por unidad",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "enmicados-a4-oficio",
          nombre: "Enmicados A4 / Oficio",
          descripcion: "Protege certificados, títulos, diplomas y listas de precios.",
          unidad: "por unidad",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "enmicados-a3",
          nombre: "Enmicados A3",
          descripcion: "Plastificado térmico de gran formato para carteles, planos y menús.",
          unidad: "por unidad",
          precio: "[Por definir]",
          destacado: false
        }
      ]
    },

    {
      id: "diseno",
      nombre: "Diseño Gráfico",
      icono: "fa-solid fa-wand-magic-sparkles",
      descripcion: "Artes creativos de alto impacto para negocios, redes sociales e imprenta.",
      servicios: [
        {
          id: "diseno-logotipo",
          nombre: "Diseño de Logotipo e Identidad",
          descripcion: "Creación de marca profesional, entrega en vectores y formato digital.",
          unidad: "proyecto completo",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "diseno-artes-redes",
          nombre: "Diseño de Artes para Redes Sociales",
          descripcion: "Posts, banners y flyers digitales para Facebook, Instagram y TikTok.",
          unidad: "por arte",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "diseno-volantes-tripticos",
          nombre: "Diseño de Volantes / Trípticos",
          descripcion: "Diagramación comercial atractiva y estructurada lista para impresión.",
          unidad: "por modelo",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "afiches-gigantografias",
          nombre: "Afiches y Gigantografías / Banners",
          descripcion: "Diseño en alta resolución para letreros, fachadas y eventos especiales.",
          unidad: "por diseño",
          precio: "[Por definir]",
          destacado: false
        }
      ]
    },

    {
      id: "personalizados",
      nombre: "Tarjetas & Imantados",
      icono: "fa-solid fa-magnet",
      descripcion: "Merchandising y recuerdos personalizados con acabados de primera.",
      servicios: [
        {
          id: "tarjetas-personales",
          nombre: "Tarjetas Personales (Millar / Ciento)",
          descripcion: "Couché 300g, plastificado mate o brillante, full color ambos lados.",
          unidad: "por ciento o millar",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "imantados-publicitarios-negocios",
          nombre: "Imantados Publicitarios para Negocios",
          descripcion: "Ideal para delivery, técnicos, farmacias, veterinarias y empresas.",
          unidad: "por ciento / millar",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "fotos-imanes-recuerdos",
          nombre: "Fotos e Imanes para Recuerdos / Eventos",
          descripcion: "Recuerdos imantados para cumpleaños, bautizos, bodas y baby showers.",
          unidad: "a partir de 12 und",
          precio: "[Por definir]",
          destacado: true
        },
        {
          id: "sellos-personalizados",
          nombre: "Sellos Personalizados",
          descripcion: "Sellos automáticos y de madera para doctores, docentes y empresas.",
          unidad: "por unidad",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "volantes-publicitarios-millar",
          nombre: "Volantes Publicitarios por Millar",
          descripcion: "Full color en papel couché de 115g o 150g, tamaño 1/4 oficio.",
          unidad: "millar (1000 und)",
          precio: "[Por definir]",
          destacado: false
        }
      ]
    },

    {
      id: "cabinas-libreria",
      nombre: "Cabinas & Librería",
      icono: "fa-solid fa-desktop",
      descripcion: "Conectividad veloz, trámites en línea, útiles de escritorio y bazar.",
      servicios: [
        {
          id: "alquiler-cabinas-internet",
          nombre: "Alquiler de Cabinas de Internet",
          descripcion: "Computadoras rápidas con internet veloz para tareas y trámites.",
          unidad: "por hora / fracción",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "llamadas-locutorio",
          nombre: "Llamadas en Locutorio",
          descripcion: "Comunicación nacional a fijos, celulares y llamadas internacionales.",
          unidad: "por minuto",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "articulos-libreria-bazar",
          nombre: "Artículos de Librería / Bazar",
          descripcion: "Cuadernos, fólderes, lapiceros, plumones, reglas y regalos decorativos.",
          unidad: "por catálogo",
          precio: "[Por definir]",
          destacado: false
        },
        {
          id: "otro-servicio-especial",
          nombre: "Otro servicio especial...",
          descripcion: "Consultas para trabajos especiales a pedido, encuadernados o formatos únicos.",
          unidad: "a cotizar",
          precio: "[Por definir]",
          destacado: false
        }
      ]
    }
  ],

  // Datos de Contacto y Ubicación
  contacto: {
    nombreComercial: "IMAGEN ELIANA",
    slogan: "Copias, Impresiones, Diseños y Soluciones Digitales",
    whatsapp: "990595353",
    whatsappFormato: "990 595 353",
    email: "imagenliana25@gmail.com",
    instagram: "imagenliana25",
    instagramUrl: "https://www.instagram.com/imagenliana25/",
    facebook: "Copias e Impresiones",
    facebookUrl: "https://www.facebook.com/",
    direccion: "Av. Principal 123 (Frente a la plaza) - Lima, Perú",
    referencia: "A media cuadra del paradero principal / Cerca a colegios",
    ciudad: "Lima, Perú",
    horario: "Lunes a Sábado: 8:00 AM - 9:00 PM | Domingos: 9:00 AM - 3:00 PM",
    coordenadas: {
      lat: -12.046374,
      lng: -77.042793
    }
  }
};

// Asegurar disponibilidad global
window.PRECIOS_CONFIG = PRECIOS_CONFIG;
