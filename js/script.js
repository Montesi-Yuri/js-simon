/* 
    JS
*/

/*
    1- Creo funzione per numeri casuali
    2- Creo 5 variabili con all'interno la funzione per i numeri casuali
    3- Inserisco le 5 variabili in un array
    4- Inserisco le 5 variabili nell'html
    5- SetTimeout per nascondere i 5 numeri dopo 30 secondi
    6- 5 prompt per permettere all'utente di inserire i numeri nell'ordine corretto
    7- Inserisco i numeri dell'utente in un array
    8- Confronto l'array dei numeri casuali con l'array dei numeri dell'utente
    9- SE le array sono identiche l'utente ha vinto
        ALTRIMENTI le array non sono identiche l'utente ha perso
    10- Inserisco le array a confronto nell'html
        SE in ordine crescente un numero dell'array dell'utente corrisponde all'array dei numeri casuali gli viene data una classe
        ALRIMENTI gli viene data un altra classe
*/

// VARIABLES

const firstNum = randomNumber(1,10);
console.log('firstNum', firstNum, typeof firstNum);
const firstCont = document.getElementById('first');

const secondNum = randomNumber(1,10);
console.log('secondNum', secondNum, typeof secondNum);
const secondCont = document.getElementById('second');

const thirdNum = randomNumber(1,10);
console.log('thirdNum', thirdNum, typeof thirdNum);
const thirdCont = document.getElementById('third');

const fourthNum = randomNumber(1,10);
console.log('fourthNum', fourthNum, typeof fourthNum);
const fourthCont = document.getElementById('fourth');

const fifthNum = randomNumber(1,10);
console.log('fifthNum', fifthNum, typeof fifthNum);
const fifthCont = document.getElementById('fifth');












// FUNCTIONS

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}