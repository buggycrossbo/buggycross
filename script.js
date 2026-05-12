// script.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Mostrar el chat solo cuando el usuario hace clic en "ENVIAR MENSAJE"
    const btnEnviar = document.querySelector('.btn-primary');
    const chatContainer = document.getElementById('chat-container');
    
    if (btnEnviar && chatContainer) {
        btnEnviar.addEventListener('click', function(e) {
            // Solo mostrar el chat si estamos en la sección de contacto
            if (window.location.hash === '#contacto' || 
                document.getElementById('contacto').getBoundingClientRect().top < 100) {
                
                e.preventDefault();
                chatContainer.style.display = 'block';
                
                // Pequeña animación
                chatContainer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Función para enviar mensaje del formulario
    window.enviarMensaje = function() {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !telefono) {
            alert('Por favor completa tu nombre y número de WhatsApp');
            return;
        }

        const texto = `Hola! Me llamo ${nombre}. Mi número es ${telefono}. ${mensaje || 'Quiero más información sobre las vueltas en buggy.'}`;
        
        const numeroWhatsApp = "591XXXXXXXXX"; // ← Cambia esto con tu número real
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        
        window.open(url, '_blank');
    };

    // Función básica del chat (por ahora solo simula)
    window.enviarChat = function() {
        const input = document.getElementById('chat-input');
        const chatBox = document.getElementById('chat-box');
        
        if (input.value.trim() !== "") {
            const mensajeUsuario = document.createElement('div');
            mensajeUsuario.style.cssText = 'text-align: right; margin: 10px 0; color: #ff3b00;';
            mensajeUsuario.textContent = input.value;
            chatBox.appendChild(mensajeUsuario);
            
            // Respuesta automática simulada
            setTimeout(() => {
                const respuesta = document.createElement('div');
                respuesta.style.cssText = 'text-align: left; margin: 10px 0; background: #222; padding: 12px; border-radius: 8px; display: inline-block;';
                respuesta.textContent = "¡Gracias por tu mensaje! En breve te responderemos por WhatsApp.";
                chatBox.appendChild(respuesta);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 800);

            input.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    };

    // Permitir enviar chat con la tecla Enter
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enviarChat();
            }
        });
    }
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}
    console.log('%cBuggycross Bolivia - Página cargada correctamente', 'color: #ff3b00; font-weight: bold');
});
