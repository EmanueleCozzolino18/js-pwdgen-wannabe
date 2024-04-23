/* STRICT MODE */
"use strict";

let currentId = document.getElementById("pass");
let currentCont = currentId.innerHTML;

let firstName = prompt("Inserisci il tuo nome:"); /* INSERIMENTO NOME AL INTERNO DELLA VARIABILE FISTNAME */
console.log("L'utente ha inserito " + (firstName)); /* LOG DEL CONTENUTO DELLA VARIABILE FIRSTNAME */

/* STESSA LETTURA DI SOPRA */
let surName = prompt("Inserici il tuo congonome:");
console.log("L'utente ha inserito " + (surName));

let favoriteColor = prompt("Inserici il tuo colore preferito:");
console.log("L'utente ha inserito " + (favoriteColor));


/* GENERAZIONE NUMERO RANDOM */
let randomNumber = Math.floor((Math.random() * 100) + 1);

console.log("Numero random generato: " + (randomNumber));

/* LOG DI TUTTI GLI INPUT DEL UTENTE */
console.log(
    `
    I dato inseriti sono nome: ${firstName} , il suo cognome: ${surName} e il suo colore preferito: ${favoriteColor} numero casuale ${randomNumber}
    `
)
/* OUTPUT VISIBILE AL UTENTE SU PAGINA */
currentCont = `${currentCont}${firstName}${surName}${favoriteColor}${randomNumber}`;
currentId.innerHTML = currentCont;