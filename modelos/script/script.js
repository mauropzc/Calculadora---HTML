let numero1 = "";
let numero2 = "";
let operacion_var = "";
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
  operacion_var = simbolo;
  document.getElementById("display").textContent = "";
}

function calcular() {
  numero2 = document.getElementById("display").textContent;

  switch (operacion_var) {
    case "+":
      resultado = parseFloat(numero1) + parseFloat(numero2);
      break;
    case "-":
      resultado = parseFloat(numero1) - parseFloat(numero2); // Corrected line
      break;
    // Add cases for other operations as needed
  }

  // Update the display with the calculated result
  document.getElementById("display").textContent = resultado;
}
