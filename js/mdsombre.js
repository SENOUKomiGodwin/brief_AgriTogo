/* ==========================================================================
   MODE SOMBRE / THÈME CLAIR
   - Ajoute automatiquement un bouton de bascule (lune / soleil) dans le header
   - Sauvegarde le choix de l'utilisateur dans le localStorage
   ========================================================================== */
(function () {
  "use strict";

  const root = document.documentElement;

  /* Création du bouton de bascule */
  const themeToggle = document.createElement("button");
  themeToggle.type = "button";
  themeToggle.className = "theme-toggle";
  themeToggle.setAttribute("aria-label", "Changer de thème (sombre / clair)");
  themeToggle.title = "Changer de thème";
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

  /* Insertion du bouton dans le header, juste avant le menu hamburger */
  const header = document.querySelector("header");
  if (header) {
    const menuToggle = header.querySelector(".menu-toggle");
    if (menuToggle) {
      header.insertBefore(themeToggle, menuToggle);
    } else {
      header.appendChild(themeToggle);
    }
  } else {
    document.body.prepend(themeToggle);
  }

  /* Met à jour l'icône selon le thème actif */
  function updateIcon() {
    const icon = themeToggle.querySelector("i");
    if (!icon) return;
    icon.className =
      root.dataset.theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  /* Bascule le thème et sauvegarde le choix */
  themeToggle.addEventListener("click", function () {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* Stockage indisponible : le thème reste actif pour cette page */
    }
    updateIcon();
  });

  /* Icône initiale */
  updateIcon();
})();
