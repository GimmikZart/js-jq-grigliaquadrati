


$(document).ready(function(){


  // creo la variabile per la lista di 15 numeri random
  var listaNumeriSquare = [];
  // creo un ciclo con cui trovo 15 numeri random tra 1 e 64
  for (i = 0; i < 15; i++) {

    // while(....) {
      // IMPOSTO UNA VARIABILE CHE MI TROVA UN NUMERO RANDOM TRA 1 E 64
      var random = Math.floor(Math.random() * 64);
      listaNumeriSquare.push(random);
    }
  

  // while() {
  //   ...
  // }
  // con un ciclo for seleziono i quadrati partendo dalla lista di numeri random e li coloro di rosso
  $(".square").addClass("sara_green");

  for (i = 0; i < listaNumeriSquare.length; i++) {
      var elementoSelezionato = $(".square").eq(listaNumeriSquare[i]);
      elementoSelezionato.removeClass("sara_green");
      elementoSelezionato.addClass("sara_red");
  }

/*
  $(".square").click(function() {



    // quando siamo dentro la funzione chiamata dall'evento (che in questo caso è il clikc)

    // this è l'elemento che ha scatenato l'evento


    if ($(this).hasClass("sara_green")) {

      $(this).addClass("green");

    } else {

      $(this).addClass("red");
    }


  });
  */

  $(".square").click(function() {
    var quadratoPremuto = $(this).index();
    if (listaNumeriSquare.includes(quadratoPremuto)){
      $(this).addClass("red");
    } else {
      $(this).addClass("green");
    }
  });

  // generazione quadratini
  // per ogni quadrato decidere se è rosso o verde.
  // se questo è rosso gli diamo una classe "informativa" per sapere che quando è cliccato deve colorarsi di rosso
  // se questo è verde blablabla

  // al click del quadrato verifico quale delle due classi ha e gli applico la relativa classe di sfondo

});
