// prendere dai campi input i valori e stamparli nel biglietto
var nome = document.getElementById('nome').value;

var distanza = document.getElementById('distanza').value;


//attraverso il bottone genera facciamo apparire il biglietto con i campi compilati correttamente
var genera = document.getElementById('genera');
genera.addEventListener("click",
  function(){
    console.log(nome);
    console.log(distanza);
  }
);
//attraverso il bottone annulla facciamo sparire il biglietto e resettiamo i campi input
