function infourl(){

    var loggedIn = verifConnexion();

    if(loggedIn == true){
        // pré-remplissage du formulaire 
        document.getElementById("idNom").value=getCookie("nom");
        document.getElementById("idPrenom").value=getCookie("prenom");
        document.getElementById("idMail").value=getCookie("email");
    }
    let template = document.querySelector("#template_dest");
    let destination=findGetParameter('destination');

    if (destination == "kualalumpur"){
        destination = "Kuala Lumpur";
    }
    if (destination == "la"){
        destination = "Los Angeles";
    }

    document.getElementById("destination_hidden").value=destination;
    document.getElementById("destination_choisie_test").innerHTML=destination;
}


function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
    //fonction récupérée sur internet
}

window.onload = function() {
    var form = document.getElementById('form');
    form.onsubmit = function() {
        return isValidForm();
    }
}



function isValidForm(){

    var strDepart = document.getElementById("al").value;
    var strRetour = document.getElementById("re").value;
    var arrayDepart = strDepart.split("-");
    var arrayRetour = strRetour.split("-");
    var dateDepart = new Date(arrayDepart[0],arrayDepart[1]-1,arrayDepart[2]);
    var dateRetour = new Date(arrayRetour[0],arrayRetour[1]-1,arrayRetour[2]);
    
    if (dateDepart.getTime() >= dateRetour.getTime()){
        window.alert("Erreur votre date de départ se situe après votre date de retour")
        return false;
    }
    else if (dateDepart.getTime() < Date.now()){
        window.alert("Erreur votre date de départ ne peut pas être passé")
        return false;
    }
    return true;

}
