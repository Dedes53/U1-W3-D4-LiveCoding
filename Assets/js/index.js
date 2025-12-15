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

// Ottimo, però purtroppo js non fornisce un metodo nell'oggetto Date in grado di calcolarci automaticamente quale sia l'ULTIMO giorno di un mese
// però si potrebbe fare questo: a partire dalla data corrente io calcolo il primo giorno del mese successivo e sottraggo un giorno
// 15 dicembre -> aggiungo 1 al mese e prendo il giorno 1 -> sottraggo 1 giorno -> 31 dicembre
//... che varrebbe a dire: per calcolare l'ultimo giorno di dicembre -> 0 di gennaio
// calcoliamoci quante celle vanno create per il mese corrente
const numberOfDaysInCurrentMonth = function () {
  const currentMont = now.getMonth(); //11
  const currentYear = now.getFullYear(); //2025

  // ora cerco di crare la data del giorno PRECEDENTE al primo del maese SUCCESSIVO
  const lastDayOfCurrentMonth = new Date(currentYear, currentMont + 1, 0);
  console.log(lastDayOfCurrentMonth);
  // da questa data appena creata che rapprsenta l'ultimo giorno del mese corrente, io ora estrpolo il NUMERO DEL GIORNO
  const numberOfDays = lastDayOfCurrentMonth.getDate(); //31
  console.log("NUMERO DI GIORNI DEL MESE CORRENTE: " + numberOfDays);

  return numberOfDays;
};

// a questo punto dovrò ripetere la creazione di una singola cella del calendario numberOfDaysCurrentMonth() volte
