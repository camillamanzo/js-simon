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

setTimeout(timerNumeri, 0);
setTimeout (myFunction, 5000); 

while(numeriRandomici.length < 5){

    let singoloNumeroRandomico = randomNumber (1, 100); 
        numeriRandomici.push (singoloNumeroRandomico);
    }

function timerNumeri() {
    alert(numeriRandomici);
}

function randomNumber (min, max) {
return Math.floor(Math.random() * (min - max + 1) + max);
}

function myFunction(){
    for(i = 0; i < 5; i++){
        let numeriInseriti = prompt("Inserisca, uno alla volta, i numeri che ha appena memorizzato.");
        numeriUtente.push(numeriInseriti)
        for (j = 0; j > numeriUtente.length; j++){
            if ( numeriRandomici.includes(numeriInseriti) ){
                numeriGiusti.push(numeriInseriti)
            }
        }
    }
    
    console.log(numeriRandomici)
    console.log(numeriUtente)
    console.log(numeriGiusti)
}


































// let numeriRandomici = [];
// // let numeriUtente = [];
// // let timer = 5;


// // while (timer < 10 || timer < 2) {
// //     timer = alert("1, 2, 3, 4, 5");
// // }

// // setTimeout(function(){
// //     for(i = 0; i < 5; i++){
// //         let numeriInseriti = prompt("Inserisca, uno alla volta, i numeri che ha appena memorizzato.");
// //         numeriUtente.push(numeriInseriti[i])
// //     }console.log (timer)
// // }, timer * 10000); 


// // console.log (numeriUtente)