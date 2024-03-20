let numero1 = "";
let numero2 = "";
let operacion = "";
let resultado = 0;

function agregarNumero(numero) {
  let pantalla = document.getElementById("display");
  if (pantalla.textContent === "0") {
    pantalla.textContent = numero;
  } else {
    pantalla.textContent += numero;
  }
}

function agregarDecimal() {
  let pantalla = document.getElementById("display");
  if (!pantalla.textContent.includes(".")) {
    pantalla.textContent += ".";
  }
}

function operacion(simbolo) {
  numero1 = document.getElementById("display").textContent;
  operacion = simbolo;
  document.getElementById("display").textContent = "";
}

function calcular() {
  numero2 = document.getElementById("display").textContent;
  
  switch (operacion) {
    case "+":
      resultado = parseFloat(numero1) + parseFloat(numero2);
      break;
    case "-":
      resultado
  }
}