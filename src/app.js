let palo = ["♦", "♥", "♠", "♣"];
let valor = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let color = "";

window.onload = generarRandom();

let contador = 11;

let boton = document.getElementById("btn-random");
boton.addEventListener("click", generarRandom);
boton.addEventListener("click", resetContador);

let secundero = setInterval(function() {
  contador--;
  document.getElementById("reloj").textContent = contador;
  if (contador === 0) {
    contador = 11;
    generarRandom();
  }
}, 1000);

function resetContador() {
  contador = 11;
}

function generarRandom() {
  let palorandom = Math.floor(Math.random() * palo.length);
  let valorrandom = Math.floor(Math.random() * valor.length);
  if (palo[palorandom] === "♦" || palo[palorandom] === "♥") {
    color = "red";
  } else {
    color = "black";
  }
  let valorpalohead = document.getElementById("palocab");

  valorpalohead.textContent = palo[palorandom];
  valorpalohead.style.color = color;
  let valornumero = document.getElementById("numero");
  valornumero.innerHTML = valor[valorrandom];
  let valorpalofoot = document.getElementById("palopie");
  valorpalofoot.textContent = palo[palorandom];
  valorpalofoot.style.color = color;
}

function cambiarDimension() {
  let valoraltura = document.getElementById("alto").value;
  let valorancho = document.getElementById("ancho").value;
  let dimension = document.getElementById("tarjeta");
  dimension.style.height = valoraltura + "px";
  dimension.style.width = valorancho + "px";
  let valorpalohead = document.getElementById("palocab");
  valorpalohead.style.fontSize = valoraltura / 10 + "px";
  let valornumero = document.getElementById("numero");
  valornumero.style.fontSize = valoraltura / 10 + "px";
  let valorpalofoot = document.getElementById("palopie");
  valorpalofoot.style.fontSize = valoraltura / 10 + "px";
}

let botoncambiar = document.getElementById("btn-change");
botoncambiar.addEventListener("click", cambiarDimension);
