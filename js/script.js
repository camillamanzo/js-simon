/* 
 * Un alert() espone 5 numeri generati casualmente.
 * Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

// Creare due array vuote per numeri casuali e numeri dell'user.
// Creare una funzione Timeout con il countdown dei secondi,
// dopo i quali scattano i prompt (da mettere in un array).
// Verificare quali e quanti dei numeri inseriti combacino con i numeri generati.

let numeriRandomici = [];
let numeriUtente = [];
var numeriGiusti = [];
 

while(numeriRandomici.length < 5){

    let singoloNumeroRandomico = randomNumber (1, 100);

    if (!numeriRandomici.includes(singoloNumeroRandomico) ){
        numeriRandomici.push (singoloNumeroRandomico);
    }
}

// console.log("prima settimeout")
setTimeout(timerNumeri, 0);
// console.log("dopo settimeout")

function timerNumeri() {
    // console.log("dentro timer numeri")
    alert(numeriRandomici);
    // console.log("prima di settimeout myfunction")
    setTimeout(myFunction, 5000);
}

function randomNumber (min, max) {
return Math.floor(Math.random() * (min - max + 1) + max);
}

function myFunction(){
    // console.log("dentro myfunction")
    for(let i = 0; i < 5; i++){
        let numeriInseriti = parseInt(prompt("Inserisca, uno alla volta, i numeri che ha appena memorizzato.") );
        numeriUtente.push(numeriInseriti)
    }
    for (let j = 0; j < numeriUtente.length; j++){
        if (numeriRandomici.includes(numeriUtente[j]) && !numeriGiusti.includes(numeriUtente[j]) ){
            numeriGiusti.push(numeriUtente[j])
        }
    }

    console.log(numeriRandomici)
    console.log(numeriUtente)
    console.log(numeriGiusti)
    console.log(numeriGiusti.length)
    
}
