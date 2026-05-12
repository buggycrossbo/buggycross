// script.js - Buggycross Bolivia

// Función para el menú móvil
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }
}

// Función para mostrar el chat en Contacto
function mostrarChat() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        chatContainer.style.display = 'block';
        chatContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para enviar mensaje por WhatsApp
function enviarMensaje() {
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !telefono) {
        alert('Por favor completa tu nombre y número de WhatsApp');
        return;
    }

    const texto = `Hola! Me llamo ${nombre}. Mi número es ${telefono}. ${mensaje || 'Quiero información sobre las vueltas en buggy.'}`;
    
    // Cambia este número por el tuyo real
    const numeroWhatsApp = "59171234567"; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
}

// Función básica del chat
function enviarChat() {
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    
    if (input && chatBox && input.value.trim() !== "") {
        // Mensaje del usuario
        const msgUser = document.createElement('div');
        msgUser.style.cssText = 'text-align: right; margin: 12px 0; color: #ff3b00; font-weight: 500;';
        msgUser.textContent = input.value;
        chatBox.appendChild(msgUser);

        // Respuesta simulada
        setTimeout(() => {
            const msgBot = document.createElement('div');
            msgBot.style.cssText = 'text-align: left; margin: 12px 0; background: #1f1f1f; padding: 14px; border-radius: 12px; max-width: 80%;';
            msgBot.textContent = "¡Gracias por tu mensaje! Te responderemos por WhatsApp en breve.";
            chatBox.appendChild(msgBot);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 900);

        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Inicializar eventos
document.addEventListener('DOMContentLoaded', function() {
    // Enter en el chat
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enviarChat();
            }
        });
    }

    console.log('%cBuggycross Bolivia - Página cargada correctamente', 'color: #ff3b00; font-size: 14px;');
});
