// -------------------------------------
// Gestión de pestañas (NO MODIFICAR)
// -------------------------------------

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

for (const button of tabButtons) {
    button.addEventListener("click", function () {
        const targetId = button.dataset.tab;

        for (const tabButton of tabButtons) {
            tabButton.classList.remove("active");
        }

        for (const panel of panels) {
            panel.classList.remove("active");
        }

        button.classList.add("active");
        document.getElementById(targetId).classList.add("active");
    });
}

// -------------------------------------
// 1. Adivina el número
// -------------------------------------

// TODO: Variables del juego
const inputNumero = document.querySelector("#inputNumero");
const btnComprobarNumero = document.querySelector("#btnComprobarNumero");
const btnReiniciarNumero = document.querySelector("#btnReiniciarNumero");
const intentosNumero = document.querySelector("#intentosNumero");
const mensajeNumero = document.querySelector("#mensajeNumero");
let numerosRepetidos = [];
let numeroSecreto;
let intentos = 0;

// TODO: Funciones del juego
function genNumeroSecreto(){
    numeroSecreto = Math.floor(Math.random()*100);
}

function cargarPagina(){
    genNumeroSecreto();
    inputNumero.value="";
    intentosNumero.textContent=0;
    mensajeNumero.innerHTML="";
    numerosRepetidos=[];
    console.log(numeroSecreto);
}

function validarNumero(){

    numerosRepetidos.forEach((numero => {
        if (numero === inputNumero){

            alert(mensajeNumero.innerHTML=`${inputNumero} es un número repetido.`);
            return;

        }
    }));

    if (inputNumero === numeroSecreto){

        intentosNumero.textContent=++intentos;
        mensajeNumero.innerHTML=`¡Felicidades, ${numeroSecreto} era el número secreto!`;
        return;

    }else{
        if (isNaN(inputNumero.value) || inputNumero < 1 || inputNumero > 100){

            mensajeNumero.innerHTML=`El número no está entre 1 y 100`;
            return;

        }else if (inputNumero < numeroSecreto){

            if (inputNumero+20 < numeroSecreto){

                numerosRepetidos.push(inputNumero);
                intentosNumero.textContent=++intentos;
                mensajeNumero.innerHTML=`El número ${inputNumero} es menor que el número secreto... Frío, frío.`;
                return;

            }else if (inputNumero+10 < numeroSecreto){

                numerosRepetidos.push(inputNumero);
                intentosNumero.textContent=++intentos;
                mensajeNumero.innerHTML=`${inputNumero} es menor que el número secreto... Caliente, caliente.`;
                return;

            }else {

                intentosNumero.textContent=++intentos;
                mensajeNumero.innerHTML=`${inputNumero} es menor que el número secreto... ¡Te quemas!`;

            }

        }else if (inputNumero > numeroSecreto){

             if (inputNumero+20 > numeroSecreto){

                numerosRepetidos.push(inputNumero);
                intentosNumero.textContent=++intentos;
                mensajeNumero.innerHTML=`El número ${inputNumero} es mayor que el número secreto... Frío, frío.`;
                return;

            }else if (inputNumero+10 > numeroSecreto){

                numerosRepetidos.push(inputNumero);
                intentosNumero.textContent=++intentos;
                mensajeNumero.innerHTML=`${inputNumero} es mayor que el número secreto... Caliente, caliente.`;
                return;

            }else {

                intentosNumero.textContent=++intentos;
                mensajeNumero.innerHTML=`${inputNumero} es mayor que el número secreto... ¡Te quemas!`;

            }

        }
    }
    
}

cargarPagina();

// TODO: Eventos del juego
btnComprobarNumero.addEventListener("click", () =>{
    validarNumero();
    console.log(numeroSecreto);
});

btnReiniciarNumero.addEventListener("click",()=>{
    cargarPagina();
});

// -------------------------------------
// 2. Siete y medio
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego


// -------------------------------------
// 3. Piedra, papel o tijera
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego
