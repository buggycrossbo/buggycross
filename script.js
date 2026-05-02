// script.js
function abrirChat() {
    // Si ya existe el chat, solo lo mostramos
    if (document.getElementById('chat-container')) {
        document.getElementById('chat-container').style.display = 'flex';
        return;
    }

    const chatHTML = `
    <div id="chat-container" style="position:fixed; bottom:100px; right:20px; width:380px; height:520px; background:#1a1a1a; border-radius:15px; box-shadow:0 10px 30px rgba(0,0,0,0.6); display:flex; flex-direction:column; overflow:hidden; z-index:1000;">
        
        <!-- Header del chat -->
        <div style="background:#ff6600; padding:15px; color:white; display:flex; justify-content:space-between; align-items:center;">
            <strong>Asistente Buggycross</strong>
            <span onclick="cerrarChat()" style="cursor:pointer; font-size:20px;">×</span>
        </div>

        <!-- Mensajes -->
        <div id="chat-messages" style="flex:1; padding:15px; overflow-y:auto; background:#111;">
            <p style="color:#888; text-align:center; margin-top:20px;">¡Hola! ¿En qué te puedo ayudar?</p>
        </div>

        <!-- Input -->
        <div style="padding:15px; background:#1a1a1a; border-top:1px solid #333;">
            <input type="text" id="chat-input" placeholder="Ejemplo: ¿Cuánto cuesta una vuelta?" 
                   style="width:100%; padding:12px; border:none; border-radius:25px; background:#222; color:white;">
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', chatHTML);

    const input = document.getElementById('chat-input');
    input.focus();

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const mensaje = this.value.trim();
            if (mensaje === '') return;
            
            agregarMensaje(mensaje, 'user');
            this.value = '';

            // Respuesta simulada de IA
            setTimeout(() => {
                agregarMensaje("Gracias por tu consulta. Un momento mientras te doy la información actualizada...", 'bot');
            }, 800);
        }
    });
}

function agregarMensaje(texto, tipo) {
    const messages = document.getElementById('chat-messages');
    const mensajeDiv = document.createElement('div');
    
    if (tipo === 'user') {
        mensajeDiv.style.cssText = 'background:#ff6600; color:white; padding:10px 15px; border-radius:20px; max-width:80%; margin-left:auto; margin-bottom:10px;';
    } else {
        mensajeDiv.style.cssText = 'background:#222; padding:10px 15px; border-radius:20px; max-width:80%; margin-bottom:10px;';
    }
    
    mensajeDiv.textContent = texto;
    messages.appendChild(mensajeDiv);
    messages.scrollTop = messages.scrollHeight;
}

function cerrarChat() {
    const chat = document.getElementById('chat-container');
    if (chat) chat.style.display = 'none';
}
