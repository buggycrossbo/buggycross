// script.js - Chat profesional

function abrirChat() {
    if (document.getElementById('chat-container')) {
        document.getElementById('chat-container').style.display = 'flex';
        return;
    }

    const chatHTML = `
    <div id="chat-container">
        <!-- Header -->
        <div class="chat-header">
            <div class="chat-header-info">
                <span class="chat-icon">🏎️</span>
                <div>
                    <strong>Buggycross Asistente</strong>
                    <small>En línea • Respuestas inmediatas</small>
                </div>
            </div>
            <span class="close-btn" onclick="cerrarChat()">✕</span>
        </div>

        <!-- Mensajes -->
        <div id="chat-messages" class="chat-messages">
            <div class="bot-message">
                ¡Hola! 👋 Bienvenido a Buggycross.<br>
                ¿En qué te puedo ayudar hoy?<br>
                <small>Precios • Horarios • Reservas • Hidroponía</small>
            </div>
        </div>

        <!-- Input -->
        <div class="chat-input-area">
            <input type="text" id="chat-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
            <button onclick="enviarMensaje()" class="send-btn">➤</button>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Enfocar el input
    const input = document.getElementById('chat-input');
    input.focus();

    // Enviar con Enter
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enviarMensaje();
        }
    });
}

function enviarMensaje() {
    const input = document.getElementById('chat-input');
    const texto = input.value.trim();

    if (texto === '') return;

    // Agregar mensaje del usuario
    agregarMensaje(texto, 'user');
    input.value = '';

    // Respuesta simulada de la IA
    setTimeout(() => {
        agregarMensaje("Estoy consultando la información más actualizada para ti...", 'bot');
    }, 800);
}

function agregarMensaje(texto, tipo) {
    const messagesContainer = document.getElementById('chat-messages');
    const mensaje = document.createElement('div');

    if (tipo === 'user') {
        mensaje.className = 'user-message';
        mensaje.textContent = texto;
    } else {
        mensaje.className = 'bot-message';
        mensaje.innerHTML = texto;
    }

    messagesContainer.appendChild(mensaje);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function cerrarChat() {
    const chat = document.getElementById('chat-container');
    if (chat) chat.style.display = 'none';
}
/* ==================== CHAT ==================== */
#chat-container {
    position: fixed;
    bottom: 110px;
    right: 25px;
    width: 380px;
    height: 580px;
    background: #1a1a1a;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 3000;
    border: 1px solid #333;
}

.chat-header {
    background: linear-gradient(135deg, #ff6600, #ff8533);
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

.chat-header-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.chat-icon {
    font-size: 28px;
}

.close-btn {
    font-size: 24px;
    cursor: pointer;
    font-weight: bold;
}

.chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background: #111;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.user-message {
    align-self: flex-end;
    background: #ff6600;
    color: white;
    padding: 12px 18px;
    border-radius: 18px 18px 4px 18px;
    max-width: 80%;
}

.bot-message {
    align-self: flex-start;
    background: #222;
    padding: 12px 18px;
    border-radius: 18px 18px 18px 4px;
    max-width: 80%;
}

.chat-input-area {
    padding: 15px;
    background: #1a1a1a;
    border-top: 1px solid #333;
    display: flex;
    gap: 8px;
}

#chat-input {
    flex: 1;
    padding: 14px 18px;
    border: none;
    border-radius: 30px;
    background: #222;
    color: white;
    font-size: 15px;
}

.send-btn {
    width: 50px;
    height: 50px;
    background: #ff6600;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
}
