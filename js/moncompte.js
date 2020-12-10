function initialisation(){
    verifConnexion();
    email=getCookie("email");
    nom=getCookie("nom");
    prenom=getCookie("prenom");
    document.getElementById("email").innerHTML=email;
    document.getElementById("nom").innerHTML=nom;
    document.getElementById("prenom").innerHTML=prenom;


    if (getCookie("reservationDest")!=null){
        var cks=document.getElementsByClassName("res");
        document.getElementById("reservation_false").setAttribute("hidden",true);
        for (let i=0;i<cks.length;i++){
            cks[i].innerHTML=getCookie(cks[i].id);
        }
        document.getElementById("reservationPrix").innerHTML=document.getElementById("reservationPrix").innerHTML+"€";
    }
    else{
        var docToHide= document.getElementsByClassName("tohide");
        for (let k=0;k<docToHide.length;k++){
            docToHide[k].setAttribute("hidden",true);
        }
    }
}