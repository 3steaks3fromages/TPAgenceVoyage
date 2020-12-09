function infourl(){
    let template = document.querySelector("#listeRecap");
    let variables=[findGetParameter('dest'),findGetParameter('nom'),findGetParameter('prenom'),findGetParameter('telephone'),findGetParameter('mail'),findGetParameter('depart'),findGetParameter('retour'),findGetParameter('nbe'),findGetParameter('nba'),findGetParameter('dej'),findGetParameter('remarque')]
    let clone = document.importNode(template.content, true);      // clone le template
    console.log(variables);

    newContent= clone.firstElementChild.innerHTML// remplace {{modèle}}
    .replace(/{{dest}}/g, variables[0])// et {{couleur}} par
    .replace(/{{nom}}/g, variables[1])// leur valeur
    .replace(/{{prenom}}/g, variables[2])
    .replace(/{{telephone}}/g, variables[3])
    .replace(/{{mail}}/g, variables[4])
    .replace(/{{depart}}/g, variables[5])
    .replace(/{{retour}}/g, variables[6])
    .replace(/{{nbe}}/g, variables[7])
    .replace(/{{nba}}/g, variables[8])
    .replace(/{{dej}}/g, variables[9])
    .replace(/{{remarque}}/g, variables[10]);
    clone.firstElementChild.innerHTML= newContent;
    document.body.appendChild(clone);// On ajoute le clone créé
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