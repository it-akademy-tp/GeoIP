$(document).ready(function() {

  // se declanche quand on clic sur le bouton SEND
  $('body').on('click', 'input[type="button"]', function() {
    // Récupere la valeur saisie et la sauvegarde dans une variable
    var saisieUser = $('[data-use="input"]').val();
    // On concatene l'adresse de l'api avec la saisie de l'utilisateur
    var url = "http://freegeoip.net/json/" + saisieUser;


    // requete
    $.ajax({
      // on lui donne l'url concaténé
      url: url
      }).done(function(data) {

        var htmlRender = "<ul>";

        // pour chaque element du tableau on affiche dans un li un span
        // qui contiendra l'index et le li sa valeur correspondante
        $.each(data, function(index, value) {
          if(value != "") {
          htmlRender += "<li><span>"+ index +"</span>"+ value +"</li>";
        }else{
          htmlRender += "<li><span>"+ index +"</span> unknow </li>";
        }
        });


        htmlRender += "</ul>";

        // On envoie le resultat sur notre page qui a la div data-use=result
        $('[data-use="result"]').html(htmlRender);
      });
  });
});
