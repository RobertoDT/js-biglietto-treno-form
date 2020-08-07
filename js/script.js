// prendere dai campi input i valori e stamparli nel biglietto



//attraverso il bottone genera facciamo apparire il biglietto con i campi compilati correttamente
var genera = document.getElementById('genera');
genera.addEventListener("click",
  function(){
    

    var nome = document.getElementById('nome').value;
    var distanza = document.getElementById('distanza').value;
    var fascia = document.getElementById('fascia').value;

    var prezzo = distanza * 0.21;

    var scontoMinorenni = (prezzo * 20) / 100;
    var prezzoMinorenni = prezzo - scontoMinorenni;

    var scontoOver = (prezzo * 40) / 100;
    var prezzoOver = prezzo - scontoOver;

    var messaggioMaggiorenni = "Tariffa standard";
    var messaggioMinorenni = "Tariffa ridotta";
    var messaggioOver = "Sconto Silver";


    document.getElementById('nome-utente').innerHTML = nome;
    document.getElementById("carrozza").innerHTML = Math.floor((Math.random() * 10));
    document.getElementById("codiceCp").innerHTML = Math.floor((Math.random() * 9998) + 90001);

    if(fascia == "minorenne"){
      prezzo = prezzoMinorenni.toFixed(2);
      document.getElementById('offerta').innerHTML = messaggioMinorenni;
    } else if (fascia == "over65"){
      prezzo = prezzoOver.toFixed(2);
      document.getElementById('offerta').innerHTML = messaggioOver;
    } else {
      document.getElementById('offerta').innerHTML = messaggioMaggiorenni;
    }

    document.getElementById("costo").innerHTML = prezzo;

  }
);
//attraverso il bottone annulla facciamo sparire il biglietto e resettiamo i campi input
