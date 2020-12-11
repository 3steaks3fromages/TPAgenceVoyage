function ajoutDestinations(prixMin,prixMax){
    var prixMaxInt=1000;
    var prixMinInt=0;

    if(typeof(prixMin) != "undefined"){
        prixMinInt=parseInt(prixMin);
    }
    if(typeof(prixMax) != "undefined"){
        prixMaxInt=parseInt(prixMax);
    }
    document.getElementById("bloc-destination").innerHTML="";
    fetch('../json/destinations_data.json')
    .then(response => response.json())
    .then(data => {
        var i = 0;
        var tableauPrix=[];
        var destinationTemp=[];
        for(destination_data in data){
            i++;
            name=data[destination_data]["name"];
            prixAdulte=data[destination_data]["prixAdulte"];
            imgPath=data[destination_data]["banner"];
            continent=data[destination_data]["continent"];
            if((parseInt(prixAdulte)>prixMinInt) && (parseInt(prixAdulte)<prixMaxInt)){
                tableauPrix.push(prixAdulte);
                destinationTemp.push(destination_data);
                document.getElementById("bloc-destination").innerHTML=document.getElementById("bloc-destination").innerHTML+`        
                <div>    
                    <a href=\"reservation.html?destination=`+destination_data+`\"><img src=\"`+imgPath+`\" alt=\"`+name+`\" id=\"i`+i+`\" class=\"dest\"></a>
                    <p class=\"text_temp\" id=\"temp_`+destination_data+`\"></p>
                </div>`;
            }
        }
        console.log(destinationTemp);
        affichertemperature(tableauPrix,destinationTemp);
    });
}

