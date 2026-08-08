// Attend que tout le DOM (structure de la page) soit chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');  // Récupère le bouton hamburger
    const navLinks = document.querySelector('.nav-links');      // Récupère le menu de navigation

    // Vérifie que les deux éléments existent bien sur la page
    if (menuToggle && navLinks) {
        // Au clic sur le bouton hamburger
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');  // Affiche ou masque le menu (ajout/retrait de la classe 'active')
            
            // Changer l'icône hamburger <-> croix
            const icon = menuToggle.querySelector('i');  // Récupère l'icône à l'intérieur du bouton
            if (icon) {  // Si l'icône existe
                icon.classList.toggle('fa-bars');   // Bascule vers l'icône hamburger
                icon.classList.toggle('fa-xmark');  // Bascule vers l'icône croix (fermeture)
            }
        });
    }
});

const contactForm = document.getElementById('contactForm');  // Récupère le formulaire de contact par son id

// Vérifie que le formulaire existe sur la page
if (contactForm) {
    // Au moment de l'envoi du formulaire
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();  // Empêche le rechargement de la page
        
        // Afficher un message de succès à l'utilisateur
        alert('Merci ! Votre message a bien été envoyé à l\'équipe AGRI-TOGO.');
        
        // Vider les champs du formulaire
        contactForm.reset();
    });
}
