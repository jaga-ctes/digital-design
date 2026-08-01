// ============================================================
// JAGĀ DIGITAL DESIGN — landing script
// Menú mobile. Sin dependencias externas.
// ============================================================

(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");

  function closeMenu() {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    links.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.contains("is-open");
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    // Cerrar el menú al elegir un link (viaje por ancla en la misma página)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });

    // Cerrar con Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }
})();
