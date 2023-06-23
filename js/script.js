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
firstCont.innerHTML = firstNum;

const secondNum = randomNumber(1,10);
console.log('secondNum', secondNum, typeof secondNum);
const secondCont = document.getElementById('second');
secondCont.innerHTML = secondNum;

const thirdNum = randomNumber(1,10);
console.log('thirdNum', thirdNum, typeof thirdNum);
const thirdCont = document.getElementById('third');
thirdCont.innerHTML = thirdNum;

const fourthNum = randomNumber(1,10);
console.log('fourthNum', fourthNum, typeof fourthNum);
const fourthCont = document.getElementById('fourth');
fourthCont.innerHTML = fourthNum;

const fifthNum = randomNumber(1,10);
console.log('fifthNum', fifthNum, typeof fifthNum);
const fifthCont = document.getElementById('fifth');
fifthCont.innerHTML = fifthNum;

const randomNumbers = [firstNum, secondNum, thirdNum, fourthNum, fifthNum];

console.log('numeri randomici', randomNumbers);

const numbersCont = [firstCont, secondCont, thirdCont, fourthCont, fifthCont];









// FUNCTIONS

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

setTimeout(
    function(){
        
        for (let i = 0; i < randomNumbers.length; i++) {

            console.log(randomNumbers[i]);
            numbersCont[i].classList.add('d-none');
        }

        let userFirstNum = parseInt(prompt('Inserisci il primo numero che hai visto'));
        let userSecondNum = parseInt(prompt('Inserisci il secondo numero che hai visto'));
        let userThirdNum = parseInt(prompt('Inserisci il terzo numero che hai visto'));
        let userFourthNum = parseInt(prompt('Inserisci il quarto numero che hai visto'));
        let userFifthNum = parseInt(prompt('Inserisci il quinto numero che hai visto'));

        console.log('userFirstNum', userFirstNum);
        console.log('userSecondNum', userSecondNum);
        console.log('userThirdNum', userThirdNum);
        console.log('userFourthNum', userFourthNum);
        console.log('userFifthNum', userFifthNum);

        const userNumbers = [userFirstNum, userSecondNum, userThirdNum, userFourthNum, userFifthNum];
        console.log('Numeri inseriti dall utente', userNumbers)

        for (let i = 0; i < randomNumbers.length; i++) {
            
            if (randomNumbers[i] == userNumbers[i]){
                userNumbers[i].classList.add('')
            }
        }
    
        
        

    }, 5000);
