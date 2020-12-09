function affichertemperature(){
    var liste_destinations=document.getElementsByClassName("dest");
    let appid ="22a7422a02905ebdb6a91c38f34a6256";

    for (i=0;i<8;i++){
        var destination=liste_destinations.item(i).getAttribute("alt");
        console.log(destination);
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+destination+"&appid="+appid+"&units=metric")
        .then(function(response){
            return response.json();
        })
        .then(function(json){

            document.getElementsByTagName("temp_"+destination.trim()).innerHTML=(json["name"]+" - "+ parseInt(json["main"]["temp"])+"°C");
        });
    }
}