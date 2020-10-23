fonction affichertemperature(){
    let city = "Londres";
    let appid ="22a7422a02905ebdb6a91c38f34a6256";
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+London+"&appid="+appid+"&units=metric")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        document.getElementById("myp").innerHTML="Latempérature"+json["name"]+"est de"+ json["main"]["temp"+"°C"]
    })
}