// Obtener el par᭥tro 'tabla' de la URL
const urlParams = new URLSearchParams(window.location.search);
const tabla = urlParams.get('tabla');

/* Nivel 1 */

let preguntas = [];
let multiplo = tabla || 2;
let iteraciones = 10;
let indicePregunta = 0;
let puntosNivel1 = 0;


function iniciarDesafioSimple() {

    indicePregunta = 0;
    puntosNivel1 = 0;

    for (let i = 1; i <= iteraciones; i++) {
        let pregunta = "¿Cuál es el resultado de " + multiplo + " x " + i + "?";
        let respuesta = multiplo * i;

        // Generar dos opciones incorrectas que no sean iguales a la correcta
        let opcion1 = respuesta + Math.floor(Math.random() * 5) + 1;
        let resta = Math.min(respuesta - 1, Math.floor(Math.random() * 5) + 1);
        let opcion2 = respuesta - resta;

        // Mezclar las opciones en un array aleatorio
        let opciones = [Number(respuesta), Number(opcion1), Number(opcion2)].sort(() => Math.random() - 0.5);

        let nodo = { pregunta: pregunta, opciones: opciones, respuestaCorrecta: respuesta };
        preguntas.push(nodo);
    }



    mostrarPregunta(indicePregunta);
}

function mostrarPregunta(indice) {
    const desafioContent = document.getElementById('desafioContent');
    const pregunta = preguntas[indice];

    desafioContent.innerHTML = `
    <div class="border p-3 rounded">
        <h5>Nivel 1</h5>
        <p>${pregunta.pregunta}</p>

        <input type="radio" id="opcion1" name="respuesta" value=${pregunta.opciones[0]}>
        <label for="opcion1">${pregunta.opciones[0]}</label><br>

        <input type="radio" id="opcion2" name="respuesta" value=${pregunta.opciones[1]}>
        <label for="opcion2">${pregunta.opciones[1]}</label><br>

        <input type="radio" id="opcion3" name="respuesta" value=${pregunta.opciones[2]}>
        <label for="opcion3">${pregunta.opciones[2]}</label><br>

        <button class="btn btn-success mt-3" onclick="verificarRespuestaSimple()">Verificar</button>
        <div id="mensajeResultado" class="mt-3"></div>
    </div>
    `;
}

function verificarRespuestaSimple() {
    const opciones = document.getElementsByName('respuesta');
    let seleccionada = null;

    // Obtener la opci󮠳eleccionada
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionada = opciones[i].value;
            break;
        }
    }

    const mensajeResultado = document.getElementById('mensajeResultado');

    if (Number(seleccionada) === preguntas[indicePregunta].respuestaCorrecta) {
        mensajeResultado.innerHTML = `<h3 class="text-success">¡Correcto!</h3>`;
        puntosNivel1++;
    } else {
        mensajeResultado.innerHTML = `<h4 class="text-danger">La respuesta correcta es ${preguntas[indicePregunta].respuestaCorrecta}</h4>`;
    }

    // Esperar un momento y pasar a la siguiente pregunta
    setTimeout(() => {
        indicePregunta++;
        if (indicePregunta < preguntas.length) {
            mostrarPregunta(indicePregunta);
        } else {
            mensajeResultado.innerHTML = `<h5 class="text-primary">¡Has completado el desafío!</h5>`;
            mensajeResultado.innerHTML += `<h5 class="text-primary">Total aciertos: ${puntosNivel1}</h5>`;
        }
    }, 2000);
}


/* Fin Nivel 1 */

/* Nivel 2 */

function iniciarDesafioIntermedio() {
    const desafioContent = document.getElementById('desafioContent');
    let html = `<div class="border p-3 rounded"> <h5>Nivel 2 - ¿Te animás?</h5>`;

    for (let i = 1; i <= 10; i++) {
        html += `
            <div class="d-flex align-items-center mb-2">
                <span style="width: 70px;">${multiplo} x ${i} =</span>
                <input type="text" id="respuestaIntermedia${i}" class="form-control mx-2" style="width: 80px;">
            </div>`;
    }

    html += `
        <button class="btn btn-success mt-3" onclick="verificarRespuestaIntermedia()">Verificar</button>
    </div>`;

    desafioContent.innerHTML = html;
}


function verificarRespuestaIntermedia() {
    for (let i = 1; i <= 10; i++) {
        const input = document.getElementById(`respuestaIntermedia${i}`);
        const respuestaUsuario = parseInt(input.value);
        const respuestaCorrecta = i * multiplo;

        // Eliminar cualquier ícono previo
        const iconoPrevio = document.getElementById(`icono${i}`);
        if (iconoPrevio) iconoPrevio.remove();

        // Crear el ícono de verificación
        const icono = document.createElement('span');
        icono.id = `icono${i}`;
        icono.style.marginLeft = '10px';

        if (respuestaUsuario === respuestaCorrecta) {
            icono.innerHTML = '✅';
            icono.style.color = 'green';
        } else {
            icono.innerHTML = `❌ (${respuestaCorrecta})`;
            icono.style.color = 'red';
        }

        // Insertar el ícono al lado del input
        input.parentNode.appendChild(icono);
    }
}


/* Fin Nivel 2 */


// Mostrar la tabla de multiplicar seleccionada
const tablaTitle = document.getElementById('tablaTitle');
const tablaContent = document.getElementById('tablaContent');

tablaTitle.textContent = `Tabla del ${multiplo}`;
if (Number(tabla) > 1 & Number(tabla) < 11) {
    for (let i = 1; i <= 10; i++) {
        tablaContent.innerHTML += `<p>${multiplo} x ${i} = ${i * multiplo}</p>`;
    }
} else {
    tablaTitle.textContent = 'Selecciona una tabla válida';
}

// Funci󮠰ara ocultar/mostrar la tabla
function toggleTabla() {
    const tablaDiv = document.getElementById('tablaContent');
    const boton = document.getElementById("toggle");
    
    if (tablaDiv.style.display === 'none') {
        tablaDiv.style.display = 'block';
        boton.textContent = "Ocultar tabla";
    } else {
        tablaDiv.style.display = 'none';
        boton.textContent = "Ver tabla";
    }
}
























function iniciarDesafioCrack() {
    const desafioContent = document.getElementById('desafioContent');
    desafioContent.innerHTML = `
    <h3>Desafío "Eres un crack"</h3>
    <p>La estamos desarrollando..mmm...</p>
`;
}

function verificarRespuestaCrack() {
    const respuesta = document.getElementById('respuestaCrack').value;
    alert(respuesta == "35" ? "¡Impresionante, eres un crack!" : "¡Intenta nuevamente!");
}
