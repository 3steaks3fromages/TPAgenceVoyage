function initialisation(){
    verifConnexion();
    email=getCookie("email");
    nom=getCookie("nom");
    prenom=getCookie("prenom");
    document.getElementById("email").innerHTML=email;
    document.getElementById("nom").innerHTML=nom;
    document.getElementById("prenom").innerHTML=prenom;
}