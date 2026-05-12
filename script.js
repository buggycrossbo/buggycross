function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    }
}

function mostrarChat() {
    alert("Chat activado - Próximamente conectaremos Claude");
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('%cBuggycross Bolivia cargado correctamente', 'color:#ff3b00; font-weight:bold');
});
