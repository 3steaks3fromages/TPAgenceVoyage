function infourl(){
    let template = document.querySelector("#listeRecap");
    let variables=[findGetParameter('destination_hidden'),findGetParameter('nom'),findGetParameter('prenom'),findGetParameter('telephone'),findGetParameter('mail'),findGetParameter('depart'),findGetParameter('retour+required'),findGetParameter('nbe'),findGetParameter('nba'),findGetParameter('dej'),findGetParameter('remarque')]
    let clone = document.importNode(template.content, true);      // clone le template
    
    const destinations_data = require('../config.json');
    console.output(destinations_data[0]);

    $.getJSON("../json/destinations_data.json", function(data){});
    console.log(data);

    if (variables[9]==null){
        variables[9]=new String();
        variables[9]="Non";
    }
    else{
        variables[9]=new String();
        variables[9]="Oui";
    }
    
    // Calcul prix
    let destination = variables[0];
    console.log(destination);
    let adultes= parseInt(variables[8]);
    let enfants = parseInt(variables[7]);

    console.log(variables);

    var arrayDepart = variables[5].split("-");
    var arrayRetour = variables[6].split("-");
    var dateDepart = new Date(arrayDepart[0],arrayDepart[1],arrayDepart[2]);
    var dateRetour = new Date(arrayRetour[0],arrayRetour[1],arrayRetour[2]);
    var dureeSejour = Math.round((dateRetour.getTime()-dateDepart.getTime())/86400000);


    var prix =0 ;
    newContent= clone.firstElementChild.innerHTML
    .replace(/{{destinationChoisie}}/g, destination)
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