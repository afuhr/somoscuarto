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
        let pregunta = "¿Cuᬠál es el resultado de " + multiplo + " x " + i + "?";
        let respuesta = multiplo * i;

        // Generar dos opciones incorrectas que no sean iguales a la correcta
        let opcion1 = respuesta + Math.floor(Math.random() * 5) + 1;
        let opcion2 = respuesta - Math.floor(Math.random() * 5) - 1;

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
    puntosNivel1 = 0;

    desafioContent.innerHTML = `
    <div class="border p-3 rounded">
        <h4>NIVEL 1</h4>
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
            mensajeResultado.innerHTML = `<h3 class="text-primary">¡Has completado el desafío!</h3>`;
            mensajeResultado.innerHTML += `<h5 class="text-primary">Total aciertos: ${puntosNivel1}</h5>`;
        }
    }, 2000);
}


/* Fin Nivel 1 */



// Mostrar la tabla de multiplicar seleccionada
const tablaTitle = document.getElementById('tablaTitle');
const tablaContent = document.getElementById('tablaContent');

if (tabla === '2') {
    tablaTitle.textContent = 'Tabla del 2';
    for (let i = 1; i <= 10; i++) {
        tablaContent.innerHTML += `<p>${i} x 2 = ${i * 2}</p>`;
    }
} else if (tabla === '3') {
    tablaTitle.textContent = 'Tabla del 3';
    for (let i = 1; i <= 10; i++) {
        tablaContent.innerHTML += `<p>${i} x 3 = ${i * 3}</p>`;
    }
} else {
    tablaTitle.textContent = 'Selecciona una tabla vᬩda';
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




















function iniciarDesafioIntermedio() {
    const desafioContent = document.getElementById('desafioContent');
    desafioContent.innerHTML = `
    <h3>Desaf�Intermedio (Escribe la respuesta)</h3>
    <p>¿Cu᮴o es 2 x 1?</p>
    <input type="text" id="respuestaIntermedia" placeholder="Escribe tu respuesta">
    <button class="btn btn-success mt-3" onclick="verificarRespuestaIntermedia()">Verificar</button>
`;
}

function verificarRespuestaIntermedia() {
    const respuesta = document.getElementById('respuestaIntermedia').value;
    alert(respuesta == "2" ? "¡Correcto!" : "¡Intenta nuevamente!");
}

function iniciarDesafioCrack() {
    const desafioContent = document.getElementById('desafioContent');
    desafioContent.innerHTML = `
    <h3>Desafío "Eres un crack"</h3>
    <p>¿Cu᮴o es 5 x 7?</p>
    <input type="text" id="respuestaCrack" placeholder="Escribe tu respuesta">
    <button class="btn btn-success mt-3" onclick="verificarRespuestaCrack()">Verificar</button>
`;
}

function verificarRespuestaCrack() {
    const respuesta = document.getElementById('respuestaCrack').value;
    alert(respuesta == "35" ? "¡Impresionante, eres un crack!" : "¡Intenta nuevamente!");
}
