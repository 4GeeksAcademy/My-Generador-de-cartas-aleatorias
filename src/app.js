/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palo = ["♦", "♥", "♠", "♣"];
  let valor = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let color = "";

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
