function infourl(){
    let template = document.querySelector("#template_dest");
    let destination=findGetParameter('destination');
    let clone = document.importNode(template.content, true);      // clone le template

    if (destination == "kualalumpur"){
        destination = "Kuala Lumpur";
    }
    if (destination == "la"){
        destination = "Los Angeles";
    }

    newContent= clone.firstElementChild.innerHTML
    .replace(/{{destination_choisie}}/g, destination);

    document.getElementById("destination_hidden").value=destination;

    clone.firstElementChild.innerHTML= newContent;
    document.body.appendChild(clone);
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
    var dateDepart = new Date(arrayDepart[0],arrayDepart[1],arrayDepart[2]);
    var dateRetour = new Date(arrayRetour[0],arrayRetour[1],arrayRetour[2]);

    if (dateDepart.getTime() >= dateRetour.getTime()){
        window.alert("Erreur votre date de départ se situe après votre date de retour")
        return false;
    }
    if (dateDepart.getTime() < Date.now()){
        window.alert("Erreur votre date de départ ne peut pas être passé")
        return false;
    }
    return true;

}
