function abrirChat() {
    if (document.getElementById('chat-container')) {
        document.getElementById('chat-container').style.display = 'flex';
        return;
    }

    const chatHTML = `
    <div id="chat-container" style="position:fixed; bottom:100px; right:25px; width:390px; height:560px; background:#161616; border-radius:18px; box-shadow:0 15px 40px rgba(0,0,0,0.7); display:flex; flex-direction:column; overflow:hidden; z-index:1000; border:1px solid #333;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #ff6600, #ff8533); padding:18px; color:white; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
                <span style="font-size:24px;">🏎️</span>
                <strong style="font-size:18px;">Asistente Buggycross</strong>
            </div>
            <span onclick="cerrarChat()" style="cursor:pointer; font-size:26px; line-height:1;">×</span>
        </div>

        <!-- Mensajes -->
        <div id="chat-messages" style="flex:1; padding:20px; overflow-y:auto; background:#0f0f0f; display:flex; flex-direction:column; gap:12px;">
            <div style="background:#222; padding:14px 18px; border-radius:18px; max-width:85%; align-self:flex-start;">
                ¡Hola! 👋<br>
                ¿En qué te puedo ayudar hoy?<br>
                <small style="opacity:0.7;">Precios • Horarios • Reservas</small>
            </div>
        </div>

        <!-- Input -->
        <div style="padding:18px; background:#161616; border-top:1px solid #333;">
            <div style="display:flex; gap:8px;">
                <input type="text" id="chat-input" placeholder="Ej: ¿Cuánto cuesta alquilar un buggy?" 
                       style="flex:1; padding:14px 20px; border:none; border-radius:30px; background:#222; color:white; font-size:15px;">
                <button onclick="enviarMensaje()" 
                        style="background:#ff6600; color:white; border:none; width:50px; height:50px; border-radius:50%; cursor:pointer; font-size:20px;">→</button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', chatHTML);
    
    const input = document.getElementById('chat-input');
    input.focus();

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') enviarMensaje();
    });
}

function enviarMensaje() {
    const input = document.getElementById('chat-input');
    const mensaje = input.value.trim();
    
    if (mensaje === '') return;

    agregarMensaje(mensaje, 'user');
    input.value = '';

    // Respuesta simulada
    setTimeout(() => {
        agregarMensaje("Un momento por favor, estoy consultando la información actualizada...", 'bot');
    }, 700);
}

function agregarMensaje(texto, tipo) {
    const messages = document.getElementById('chat-messages');
    const div = document.createElement('div');
    
    if (tipo === 'user') {
        div.style.cssText = 'background:#ff6600; color:white; padding:14px 18px; border-radius:18px; max-width:80%; align-self:flex-end; border-bottom-right-radius:4px;';
    } else {
        div.style.cssText = 'background:#222; padding:14px 18px; border-radius:18px; max-width:80%; align-self:flex-start; border-bottom-left-radius:4px;';
    }
    
    div.innerHTML = texto;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function cerrarChat() {
    const chat = document.getElementById('chat-container');
    if (chat) chat.style.display = 'none';
}
