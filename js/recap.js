function infourl(){

    verifConnexion();

    let template = document.querySelector("#listeRecap");
    let variables=[findGetParameter('destination_hidden'),findGetParameter('nom'),findGetParameter('prenom'),findGetParameter('telephone'),findGetParameter('mail'),findGetParameter('depart'),findGetParameter('retour'),findGetParameter('nbe'),findGetParameter('nba'),findGetParameter('dej'),findGetParameter('remarque')]
    let clone = document.importNode(template.content, true);      // clone le template

    var destinationData = variables[0];
    var destinationCase = variables[0];
    if(variables[0]=="Los+Angeles"){
        destinationData="losAngeles";
        destinationCase="Los Angeles";
    }
    if(variables[0]=="Kuala+Lumpur"){
        destinationData="kualaLumpur";
        destinationCase="Kuala Lumpur";
    }

    var dejBool=false;
    if (variables[9]==null){
        variables[9]=new String();
        variables[9]="Non";
    }
    else{
        variables[9]=new String();
        variables[9]="Oui";
        dejBool=true;
    }

    var arrayDepart = variables[5].split("-");
    var arrayRetour = variables[6].split("-");
    var dateDepart = new Date(arrayDepart[0],arrayDepart[1],arrayDepart[2]);
    var dateRetour = new Date(arrayRetour[0],arrayRetour[1],arrayRetour[2]);
    var dureeSejour = Math.round((dateRetour.getTime()-dateDepart.getTime())/86400000);

    var prix =0 ;
    // Calcul prix

    var nbaInt = parseInt(variables[8]);
    var nbeInt = parseInt(variables[7]);
    fetch('../json/destinations_data.json')
    .then(response => response.json())
    .then(data => {
        //calcul prix
        var prixAdulte=parseInt(data[destinationData]["prixAdulte"]);
        var prixEnfant=0.4*prixAdulte;

        prix=prix+(nbaInt*prixAdulte*dureeSejour)+(nbeInt*prixEnfant*dureeSejour);
        if(dejBool == true){
            prix=prix+((nbaInt+nbeInt)*dureeSejour*12);
        }
        

        numeroCommande
        //ajout cookie derniere reservation et suppression des anciens (on suppose que chaque PC est utilisé par un seul utilisateur)

        eraseCookie("reservationDest")
        eraseCookie("reservationPrix");
        eraseCookie("reservationNba");
        eraseCookie("reservationNbe");
        eraseCookie("reservationDds");
        eraseCookie("reservationDdd");
        eraseCookie("reservationDdr");
        eraseCookie("reservationDej");
        eraseCookie("reservationRqe");


        setCookie("reservationDest",destinationCase,1000);
        setCookie("reservationPrix",prix,1000);
        setCookie("reservationNba",nbaInt,1000);
        setCookie("reservationNbe",nbeInt,1000);
        setCookie("reservationDds",dureeSejour,1000);
        setCookie("reservationDdd",variables[5],1000);
        setCookie("reservationDdr",variables[6],1000);
        setCookie("reservationDej",variables[9],1000);
        setCookie("reservationRqe",variables[10],1000);

        newContent= clone.firstElementChild.innerHTML
        .replace(/{{destinationChoisie}}/g, destinationCase)
        .replace(/{{nom}}/g, variables[1])
        .replace(/{{prenom}}/g, variables[2])
        .replace(/{{telephone}}/g, variables[3])
        .replace(/{{mail}}/g, variables[4])
        .replace(/{{depart}}/g, variables[5])
        .replace(/{{retour}}/g, variables[6])
        .replace(/{{dureeSejour}}/g,dureeSejour)
        .replace(/{{nbe}}/g, variables[7])
        .replace(/{{nba}}/g, variables[8])
        .replace(/{{dej}}/g, variables[9])
        .replace(/{{remarque}}/g, variables[10])
        .replace(/{{prix}}/g,prix);
        clone.firstElementChild.innerHTML= newContent;
        document.body.appendChild(clone);
    });
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