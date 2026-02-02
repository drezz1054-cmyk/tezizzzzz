const contenedor = document.getElementById("contenedor");
const botonFinalizar = document.getElementById("finalizar");
const resultado = document.getElementById("resultado");

function cargarPreguntas() {
    preguntas.forEach(p => {
        const div = document.createElement("div");
        div.className = "pregunta";

        div.innerHTML = `
            <p><strong>${p.id}. ${p.texto}</strong></p>
            ${Object.entries(p.opciones).map(([key, value]) => `
                <label>
                    <input type="radio" name="p${p.id}" value="${key}">
                    ${value}
                </label>
            `).join("")}
        `;

        contenedor.appendChild(div);
    });
}

botonFinalizar.addEventListener("click", () => {
    let correctas = 0;
    let detalleErrores = "";

    preguntas.forEach(p => {
        const seleccion = document.querySelector(`input[name="p${p.id}"]:checked`);

        if (seleccion) {
            if (seleccion.value === p.correcta) {
                correctas++;
            } else {
                detalleErrores += `
                    <div class="pregunta">
                        <p><strong>❌ ${p.id}. ${p.texto}</strong></p>
                        <p>Tu respuesta: <span style="color:#ff5252">${p.opciones[seleccion.value]}</span></p>
                        <p>Respuesta correcta: <span style="color:#4caf50">${p.textoCorrecto}</span></p>
                    </div>
                `;
            }
        } else {
            detalleErrores += `
                <div class="pregunta">
                    <p><strong>❌ ${p.id}. ${p.texto}</strong></p>
                    <p>Tu respuesta: <span style="color:#ff5252">No contestada</span></p>
                    <p>Respuesta correcta: <span style="color:#4caf50">${p.textoCorrecto}</span></p>
                </div>
            `;
        }
    });

    resultado.innerHTML = `
        <h2>Resultado final</h2>
        <p>✔ Correctas: ${correctas} / ${preguntas.length}</p>
        <h3>Corrección</h3>
        ${detalleErrores || "<p>🎉 Todas las respuestas fueron correctas</p>"}
    `;

    window.scrollTo(0, document.body.scrollHeight);
});

cargarPreguntas();
