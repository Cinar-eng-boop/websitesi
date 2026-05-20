// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            if (navMenu && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }

    // İletişim formu gönderimi
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            if (!name || !email || !message) {
                alert('Lütfen tüm alanları doldurun!');
                return;
            }

            alert('Mesajınız gönderildi! Teşekkür ederiz.');
            this.reset();
        });
    }

    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Araç kartlarına hover efekti
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    vehicleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Sayfa yüklendiğinde animasyon efekti
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});