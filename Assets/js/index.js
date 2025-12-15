console.log("File JS caricato");

// il nostro primo obiettivo sarà RIEMPIRE il contenuto dell'h1 della pagina con il mese corrente.
// HTML non può sapere il mese corrente, ma JS si(perché lo capisce dal browser che è installato su un OS).
// impariamo come JS gestisce le DATE.

//vado a costruire un array di mesi
const month = [
  "GENNAIO", //0
  "FEBBRAIO", //1
  "MARZO", //2
  "APRILE", //3
  "MAGGIO", //4
  "GIUGNO", //5
  "LUGLIO", //6
  "AGOSTO", //7
  "SETTEMBRE", //8
  "OTTOBRE", //9
  "NOVEMBRE", //10
  "DICEMBRE", //11
];

const now = new Date(); // questo crea in JS un "OGGETTO DATA" sull'ISTANTE CORRENTE
// NEWDATE impareremo in U2 essere una "funzione COSTRUTTORE"
// now è un OGGETTO pieno di metodi e proprietà utili relativi al tempo e alla data
console.log("NOW", now);

// ora dobbiamo andare a manipolare il don e inserire dentro l'h1 della pagina la stringa currentMonth
const printCurrenthMonth = function () {
  console.log(now.getMonth()); // metodo che ci restituisce il MESE (0-11)

  const currentMonth = month[now.getMonth()];
  console.log("il mese corrente è:", currentMonth);

  const h1 = document.querySelector("h1");
  h1.textContent = currentMonth;
};
printCurrenthMonth();

// stampato il mese corrente nell'h1 ora è il momento di stampare le celle dei giorni del mese corrente
// il problema è che questo numero di celle è variabile e alle volte dipende dall'anno
// un ragionamento potrebbe essere: il numero dei giorni di un mese è pari al valore dell'ULTIMO GIORNO di quel mese
