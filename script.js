// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 3500);

// Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// Chat
function abrirChat() {
    alert("Chat activado.\n\nPronto conectaremos la IA real (Kimi).");
}

function cerrarChat() {
    const chat = document.getElementById('chat-container');
    if (chat) chat.style.display = 'none';
}
