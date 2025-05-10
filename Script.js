// Menu toggle pour la version mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Fermer le menu mobile quand on clique en dehors
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
    
    // Gestion du formulaire de demande de document
    const documentForm = document.getElementById('document-request');
    const contactForm = document.getElementById('contact-form');
    
    if (documentForm) {
        documentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(documentForm);
            let message = 'Merci pour votre demande. Voici un résumé :\n\n';
            
            for (let [key, value] of formData.entries()) {
                if (value) {
                    message += `${key}: ${value}\n`;
                }
            }
            
            alert(message + '\n\nVotre demande a été enregistrée. Nous vous contacterons prochainement.');
            documentForm.reset();
        });
        
        // Montrer/cacher le champ "Autre document"
        const documentTypeSelect = document.getElementById('document-type');
        const otherDocumentField = document.getElementById('other-document');
        
        if (documentTypeSelect && otherDocumentField) {
            documentTypeSelect.addEventListener('change', function() {
                otherDocumentField.parentElement.style.display = 
                    this.value === 'autre' ? 'block' : 'none';
            });
            
            // Initialiser au chargement
            otherDocumentField.parentElement.style.display = 'none';
        }
    }
    
    // Gestion du formulaire de contact
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message. Nous vous répondrons dans les meilleurs délais.');
            contactForm.reset();
        });
    }
    
    // Animation des cartes au scroll
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.card, .service-item, .contact-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialiser l'animation au chargement
    window.addEventListener('scroll', animateOnScroll);
    
    // Exécuter une fois au chargement
    setTimeout(animateOnScroll, 100);
});
