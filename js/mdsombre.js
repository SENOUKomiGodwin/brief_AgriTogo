/* ==========================================================================
   GESTION DU THÈME SOMBRE / CLAIR
   - Crée automatiquement un bouton de bascule (lune / soleil) dans l'en-tête
   - Mémorise le choix de l'utilisateur dans le localStorage
   ========================================================================== */
(function () {
  /* Fonction auto-exécutée (IIFE) : le code reste isolé du reste de la page */
  "use strict"; /* Mode strict : JavaScript plus sûr et plus strict */

  const root = document.documentElement; /* Référence vers l'élément <html> */

  /* Création du bouton de bascule de thème */
  const themeToggle =
    document.createElement("button"); /* Crée un élément bouton */
  themeToggle.type = "button"; /* Type bouton (n'envoie pas de formulaire) */
  themeToggle.className =
    "theme-toggle"; /* Classe CSS pour le style du bouton */
  themeToggle.setAttribute(
    "aria-label",
    "Changer de thème (sombre / clair)",
  ); /* Libellé pour l'accessibilité */
  themeToggle.title = "Changer de thème"; /* Infobulle affichée au survol */
  themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>'; /* Icône lune (thème clair actif au départ) */

  /* Insertion du bouton dans le header, juste avant le menu hamburger */
  const header =
    document.querySelector("header"); /* Récupère le header de la page */
  if (header) {
    /* Si un header existe sur la page */
    const menuToggle =
      header.querySelector(".menu-toggle"); /* Récupère le bouton hamburger */
    if (menuToggle) {
      /* Si le hamburger existe */
      header.insertBefore(
        themeToggle,
        menuToggle,
      ); /* Place le bouton de thème juste avant le hamburger */
    } else {
      /* Sinon (pas de hamburger) */
      header.appendChild(themeToggle); /* Ajoute le bouton à la fin du header */
    }
  } else {
    /* Pas de header sur la page */
    document.body.prepend(themeToggle); /* Ajoute le bouton en haut du body */
  }

  /* Met à jour l'icône selon le thème actif */
  function updateIcon() {
    const icon =
      themeToggle.querySelector(
        "i",
      ); /* Récupère l'icône à l'intérieur du bouton */
    if (!icon) return; /* Sort de la fonction si l'icône n'existe pas */
    icon.className =
      root.dataset.theme === "dark"
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon"; /* Soleil en sombre, lune en clair */
  }

  /* Bascule le thème et sauvegarde le choix */
  themeToggle.addEventListener("click", function () {
    /* Au clic sur le bouton de thème */
    const next =
      root.dataset.theme === "dark"
        ? "light"
        : "dark"; /* Nouveau thème : l'inverse de l'actuel */
    root.dataset.theme =
      next; /* Applique le nouveau thème sur l'élément <html> */
    try {
      localStorage.setItem(
        "theme",
        next,
      ); /* Sauvegarde le choix de l'utilisateur */
    } catch (e) {
      /* Stockage indisponible : le thème reste actif pour cette page uniquement */
    }
    updateIcon(); /* Actualise l'icône du bouton */
  });

  /* Icône initiale affichée au chargement de la page */
  updateIcon();
})();
