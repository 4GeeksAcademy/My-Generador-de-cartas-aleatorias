/* eslint-disable */
// import "bootstrap";
// import "./style.css";

const { Button } = require("bootstrap");

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let palo = ["♦", "♥", "♠", "♣"];
let valor = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let color = "";

window.onload = function() {
  //write your code here

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
};

let boton = document.getElementById("btn-random");
boton.addEventListener("click", window.onload);

// let contador = 11;
// let secundero = setInterval(function() {
//   contador--;
//   document.getElementById("reloj").textContent = contador;
// }, 1000); // Actualiza cada segundo (1000 ms)
