// tady je místo pro náš program
function zobraz(){
document.querySelector("#vysledek").innerHTML = secti(4, 5);
}
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  document.querySelector(".ctverecek").textContent = 'Gratulace';
}

function zmenabarvy() {
  document.querySelector(".ctverecek").style.backgroundColor = 'green';
}
let jmeno = 'jana';
