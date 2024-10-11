document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form Submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi normal du formulaire
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block'; // Affiche le message de confirmation
        form.reset(); // Réinitialise le formulaire
    });

    // Animation lors du défilement
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observer une fois visible
            }
        });
    }, options);

    const hiddenElements = document.querySelectorAll('.card, .portfolio-item');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden'); // Ajout d'une classe cachée initialement
        observer.observe(el); // Commence à observer les éléments
    });
});
