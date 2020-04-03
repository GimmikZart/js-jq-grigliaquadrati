


$(document).ready(function(){



  // creo la variabile per la lista di 15 numeri random
  var listaNumeriSquare = [];
  // creo un ciclo con cui trovo 15 numeri random tra 1 e 64
  for (i = 0; i < 15; i++) {
      // IMPOSTO UNA VARIABILE CHE MI TROVA UN NUMERO RANDOM TRA 1 E 64
      var random = Math.floor(Math.random() * 64);
      listaNumeriSquare.push(random);
  }
  // con un ciclo for seleziono i quadrati partendo dalla lista di numeri random e li coloro di rosso

  for (i = 0; i < listaNumeriSquare.length; i++) {
      var elementoSelezionato = $(".square").eq(listaNumeriSquare[i]);
      elementoSelezionato.addClass("red");

  }

  //  con un altro ciclo for seleziono i quadratini non colorati di rosso e li coloro di verde
  for (i = 0; i < 64; i++) {
    var quadrato = $(".square").eq([i]);

    if ($(quadrato).hasClass("red")){
      console.log("è rosso");
    } else {
      $(quadrato).addClass("green");
    }
  }



















  $("square").click(
    // funzione
  )


  function colora(){

  }

});


// for (i = 0, i < 15, i++) {
//   var numeroSquare = random;
//   console.log(numeroSquare);
// }
