// Scroll to top button
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

// Remove hash from URL after navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, null, ' ');
        }
    });
});

// Disable browser scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Always scroll to top on page load
window.scrollTo(0, 0);

// Clear hash if present
if (window.location.hash) {
    history.replaceState(null, null, ' ');
}

// Handwriting animation with Vara.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('handwriting-text') && typeof Vara !== 'undefined') {
        const isMobile = window.innerWidth <= 768;
        new Vara('#handwriting-text', 'shadows-font.json', [
            {
                text: '100% OFFLINE. NO CLOUD.',
                fontSize: isMobile ? 15 : 19,
                strokeWidth: isMobile ? 2 : 2.4,
                letterSpacing: isMobile ? 2 : 3,
                color: '#242232',
                duration: 2000,
                textAlign: 'left'
            }
        ], {
            autoAnimation: true
        });
    }
});
