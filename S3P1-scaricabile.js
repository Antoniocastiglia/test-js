/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
    if (num1 === num2) {
        console.log("1*" + " " +(num1 + num2) * 3);
    } else {
        console.log("1*" + " " +(num1 + num2));
    } 
    }
    crazySum(5, 5);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
        console.log("2*" + " " + true);
    } else {
        console.log(false);
    }
} boundary(200);
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
    let reversedStr = str.split("").reverse().join("");
    console.log("3*" + " " + reversedStr);
}
reverseString("EPICODE");

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(string) {
    let words = string.split(" ");
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let result = capitalizedWords.join(" ");
    console.log("4*" + " " + result);
}
upperFirst("hello world, who are you?");


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    console.log("5*" + " " + randomNumbers);
}
giveMeRandom(10);



//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;
}
 let operation = area(5, 3);
console.log("6*" + " " +  operation);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(number) {
    let diff = Math.abs(number - 19);
    if (diff > 19) {
        console.log("7*" + " " + (diff * 3));
    } else {
        console.log("7*" + " " + diff);
    }
} crazyDiff(39);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(code) {
    if (code.startsWith("code")) {
        console.log("8*" + " " + code);
    } else {
        console.log("8*" + " " + "code" + code);
    }
}
codify("EPICODE");
codify("code");

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(numPos) {
    if (numPos % 3 === 0 || numPos % 7 === 0) {
        console.log("9*" + " " + true);
    } else {
        console.log("9*" + " " + false);
    }
}
check3and7(21);
check3and7(14);
check3and7(10);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(sTr) {
    let cutStr = sTr.slice(1, -1);
    console.log("10*" + " " + cutStr);
} cutString("EPICODE");