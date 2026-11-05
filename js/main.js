/**
 * ====================================================================
 * JAVASCRIPT PRINCIPAL - "IMAGEN ELIANA"
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Configuración y Fallback
  const currentConfig = window.PRECIOS_CONFIG || {
    contacto: {
      whatsapp: "990595353"
    },
    categorias: []
  };

  // 2. Elementos del DOM
  const filterBtns = document.querySelectorAll(".filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const header = document.getElementById("header");

  // Cotizador Express
  const quoteForm = document.getElementById("quoteForm");
  const quoteService = document.getElementById("quoteService");
  const quoteQty = document.getElementById("quoteQty");
  const quoteDetails = document.getElementById("quoteDetails");
  const quoteSummaryPreview = document.getElementById("quoteSummaryPreview");
  const qtyPills = document.querySelectorAll(".qty-pill");

  // Modal de Flyers
  const flyerModal = document.getElementById("flyerModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalDismissBtn = document.getElementById("modalDismissBtn");
  const modalImg = document.getElementById("modalImg");
  const modalTag = document.getElementById("modalTag");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalWaBtn = document.getElementById("modalWaBtn");

  // Modal Editor de Precios
  const priceEditorModal = document.getElementById("priceEditorModal");
  const openPriceEditorBtn = document.getElementById("openPriceEditorBtn");
  const editorCloseBtn = document.getElementById("editorCloseBtn");
  const editorCancelBtn = document.getElementById("editorCancelBtn");
  const editorSaveBtn = document.getElementById("editorSaveBtn");
  const editorServicesList = document.getElementById("editorServicesList");

  // 3. Filtrado Interactivo de Servicios por Categoría
  function filterServices(category) {
    serviceCards.forEach(card => {
      const cardCat = card.getAttribute("data-category");
      if (category === "todos" || cardCat === category) {
        card.classList.remove("card-hidden");
      } else {
        card.classList.add("card-hidden");
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      filterServices(category);
    });
  });

  // 4. Cargar y Aplicar Precios Guardados en LocalStorage (si existen)
  function applyStoredPrices() {
    const savedPrices = localStorage.getItem("imagen_eliana_precios_override");
    if (!savedPrices) return;

    try {
      const parsed = JSON.parse(savedPrices);
      for (const [id, price] of Object.entries(parsed)) {
        const priceSpan = document.querySelector(`.price-amount[data-price-id="${id}"]`);
        if (priceSpan) {
          const isPlaceholder = price.includes("[") || price.toLowerCase().includes("definir") || price === "S/ --";
          priceSpan.textContent = isPlaceholder ? "Precio a consultar" : price;
          if (isPlaceholder) {
            priceSpan.classList.add("placeholder");
          } else {
            priceSpan.classList.remove("placeholder");
          }
        }
      }
    } catch (e) {
      console.warn("No se pudieron cargar precios cacheados:", e);
    }
  }

  applyStoredPrices();

  // 5. Presets de Cantidad en Cotizador
  qtyPills.forEach(pill => {
    pill.addEventListener("click", () => {
      qtyPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      if (quoteQty) {
        quoteQty.value = pill.getAttribute("data-qty");
        updateQuotePreview();
      }
    });
  });

  // 6. Vista previa interactiva de la cotización
  function updateQuotePreview() {
    if (!quoteSummaryPreview) return;
    const serv = quoteService && quoteService.value ? quoteService.value : "[Servicio no seleccionado]";
    const qty = quoteQty && quoteQty.value ? quoteQty.value : "1";
    const det = quoteDetails && quoteDetails.value.trim() ? ` (Detalles: ${quoteDetails.value.trim()})` : "";

    quoteSummaryPreview.textContent = `"¡Hola Imagen Eliana! Quisiera cotizar: ${serv} x ${qty} und${det}."`;
  }

  if (quoteService) quoteService.addEventListener("change", updateQuotePreview);
  if (quoteQty) quoteQty.addEventListener("input", updateQuotePreview);
  if (quoteDetails) quoteDetails.addEventListener("input", updateQuotePreview);
  updateQuotePreview();

  // Enviar cotizador a WhatsApp
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!quoteService.value) {
        alert("Por favor selecciona un servicio de la lista.");
        quoteService.focus();
        return;
      }

      const serv = quoteService.value;
      const qty = quoteQty.value || "1";
      const det = quoteDetails.value.trim();
      const waNumber = (currentConfig.contacto && currentConfig.contacto.whatsapp) ? currentConfig.contacto.whatsapp : "990595353";

      let text = `¡Hola Imagen Eliana! 👋 Quisiera solicitar una cotización:\n\n📌 *Servicio:* ${serv}\n🔢 *Cantidad:* ${qty} unidades`;
      if (det) {
        text += `\n📝 *Detalles:* ${det}`;
      }
      text += `\n\n¿Cuál sería el precio y tiempo estimado de entrega? Muchas gracias.`;

      const url = `https://wa.me/51${waNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    });
  }

  // 7. Base de datos para los Flyers de la Galería
  const flyersInfo = {
    impresiones: {
      tag: "Impresiones & Acabados",
      title: "Impresiones y Copias A3, A4 y A5",
      desc: "Servicio completo de impresiones y copias en papel Bond, Couché brillante o mate, Opalina y Stickers adhesivos. Incluye servicios de tipeos urgentes, escaneos de alta resolución, anillados, enmicados y espiralados para tesis, tareas y oficinas.",
      img: "assets/images/flyer-impresiones.jpg",
      serviceQuery: "Impresiones y Copias (A3, A4, Bond, Couché)"
    },
    diseno: {
      tag: "Diseño Gráfico & Publicidad",
      title: "Diseño Gráfico Digital y Artes Publicitarios",
      desc: "Diseñamos artes publicitarios para Redes Sociales, imprentas y negocios: Logotipos, afiches de eventos, gigantografías y banners, volantes promocionales, trípticos informativos, tarjetas personales y sellos. La mejor calidad al mejor precio.",
      img: "assets/images/flyer-diseno-grafico.jpg",
      serviceQuery: "Diseño Gráfico Publicitario y Redes Sociales"
    },
    tarjetas: {
      tag: "Tarjetas & Volantes",
      title: "Tarjetas Personales y Volantes Publicitarios",
      desc: "Diseños 100% personalizados por millar o menores cantidades. Impresión en papel couché de alto gramaje con acabados mate o brillante. Ideal para posicionar tu empresa, delivery o servicio profesional.",
      img: "assets/images/flyer-tarjetas-volantes.jpg",
      serviceQuery: "Tarjetas Personales y Volantes por Millar"
    },
    imantados: {
      tag: "Merchandising & Recuerdos",
      title: "Imantados Personalizados para Todo",
      desc: "¡Imantados de excelente calidad! Promociona tu negocio o celebra un evento especial (fotos, aniversarios, bautizos, bodas, baby shower o imanes para refrigerador). Colores vivos, material resistente y cortes a medida.",
      img: "assets/images/flyer-imantados.jpg",
      serviceQuery: "Imantados Personalizados y Recuerdos"
    },
    cabinas: {
      tag: "Servicios Integrales",
      title: "Cabinas de Internet, Locutorio y Librería / Bazar",
      desc: "Centro integral con cabinas de cómputo rápidas para trámites, consultas y tareas, llamadas por locutorio, útiles escolares y de oficina, cuadernos, cartulinas, artículos de bazar, envolturas de regalos y papelería.",
      img: "assets/images/flyer-cabinas-libreria.jpg",
      serviceQuery: "Cabinas de Internet, Locutorio y Librería"
    }
  };

  // Abrir Modal de Flyer
  function openFlyerModal(flyerKey) {
    const data = flyersInfo[flyerKey];
    if (!data || !flyerModal) return;

    modalImg.src = data.img;
    modalImg.alt = data.title;
    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    const waNumber = (currentConfig.contacto && currentConfig.contacto.whatsapp) ? currentConfig.contacto.whatsapp : "990595353";
    const waMsg = encodeURIComponent(`Hola Imagen Eliana, me interesa el servicio de: *${data.serviceQuery}*. ¿Me podrían brindar detalles y precios?`);
    modalWaBtn.href = `https://wa.me/51${waNumber}?text=${waMsg}`;

    flyerModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeFlyerModal() {
    if (!flyerModal) return;
    flyerModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Listeners para la Galería
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const key = item.getAttribute("data-flyer");
      openFlyerModal(key);
    });
  });

  // Listeners para los flyers del Hero Stack
  const heroCards = document.querySelectorAll(".flyer-preview-card");
  heroCards.forEach((card, idx) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const keys = ["impresiones", "diseno", "tarjetas"];
      openFlyerModal(keys[idx] || "impresiones");
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeFlyerModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener("click", closeFlyerModal);
  if (flyerModal) {
    flyerModal.addEventListener("click", (e) => {
      if (e.target === flyerModal) closeFlyerModal();
    });
  }

  // 8. Editor Rápido de Precios en el Navegador
  function openPriceEditor() {
    if (!editorServicesList || !priceEditorModal) return;
    editorServicesList.innerHTML = "";

    if (currentConfig.categorias && currentConfig.categorias.length > 0) {
      currentConfig.categorias.forEach(cat => {
        const header = document.createElement("div");
        header.style.cssText = "font-weight: 800; font-size: 0.95rem; color: var(--color-yellow); margin-top: 10px; border-bottom: 1px solid var(--color-border); padding-bottom: 4px;";
        header.textContent = cat.nombre;
        editorServicesList.appendChild(header);

        cat.servicios.forEach(s => {
          const row = document.createElement("div");
          row.style.cssText = "display: flex; align-items: center; justify-content: space-between; gap: 10px; background: var(--color-dark); padding: 8px 12px; border-radius: 8px;";
          row.innerHTML = `
            <div style="flex-grow: 1; font-size: 0.85rem;">
              <strong>${s.nombre}</strong> <span style="color: var(--color-text-dim);">(${s.unidad})</span>
            </div>
            <input type="text" data-id="${s.id}" class="form-control" style="width: 130px; padding: 6px 10px; font-size: 0.85rem;" value="${s.precio}">
          `;
          editorServicesList.appendChild(row);
        });
      });
    }

    priceEditorModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePriceEditor() {
    if (!priceEditorModal) return;
    priceEditorModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (openPriceEditorBtn) openPriceEditorBtn.addEventListener("click", openPriceEditor);
  if (editorCloseBtn) editorCloseBtn.addEventListener("click", closePriceEditor);
  if (editorCancelBtn) editorCancelBtn.addEventListener("click", closePriceEditor);

  if (editorSaveBtn) {
    editorSaveBtn.addEventListener("click", () => {
      const inputs = editorServicesList.querySelectorAll("input[data-id]");
      const overrideObj = {};

      inputs.forEach(inp => {
        const id = inp.getAttribute("data-id");
        const val = inp.value.trim() || "[Por definir]";
        overrideObj[id] = val;

        // Actualizar en el DOM
        const priceSpan = document.querySelector(`.price-amount[data-price-id="${id}"]`);
        if (priceSpan) {
          const isPlaceholder = val.includes("[") || val.toLowerCase().includes("definir") || val === "S/ --";
          priceSpan.textContent = isPlaceholder ? "Precio a consultar" : val;
          if (isPlaceholder) {
            priceSpan.classList.add("placeholder");
          } else {
            priceSpan.classList.remove("placeholder");
          }
        }
      });

      // Guardar en localStorage
      localStorage.setItem("imagen_eliana_precios_override", JSON.stringify(overrideObj));
      closePriceEditor();
      alert("¡Precios actualizados en la página con éxito! Para hacerlos permanentes en el código, también puedes colocarlos en el archivo 'js/prices-config.js'.");
    });
  }

  // 9. Mobile Hamburger Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // 10. Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 11. Actualizar año en footer
  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Cerrar modales con Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeFlyerModal();
      closePriceEditor();
    }
  });
});
