function affichertemperature(tableauPrix, destinationTemp){
    var liste_destinations=document.getElementsByClassName("dest");
    let appid ="22a7422a02905ebdb6a91c38f34a6256";
    var tableau = [];

    var nb_dest= 8;

    for (let i=0;i<nb_dest;i++){
        let destination=liste_destinations.item(i).getAttribute("alt");
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+destination+"&appid="+appid+"&units=metric")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json);
            tableau[i] = parseInt(json["main"]["temp"]);
            if (tableau.length==nb_dest){
                for (let j=0;j<nb_dest;j++){
                    let destination=liste_destinations.item(j).getAttribute("alt");
                    document.getElementById("temp_"+destinationTemp[j].replace(/ /g,'')).innerHTML=(destination+" à partir de : "+tableauPrix[j] + "€ &nbsp&nbsp&nbsp Température : "+ parseInt(tableau[j])+"°C");
                }
            }
        });
    }
}

function initialisation(){
    verifConnexion();
    ajoutDestinations();
    

}