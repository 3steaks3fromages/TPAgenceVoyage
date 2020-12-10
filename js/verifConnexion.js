function verifConnexion(){
    /* Structure cookies:
    0: email
    1: mdp
    2: nom
    3: prenom
    */
    var cookies = document.cookie;
    if (getCookie("email")==null){
        // Afficher connexion
        document.getElementById("Account_or_login").innerHTML="Connexion";
        document.getElementById("Account_or_login").href="connexion.html";
    }
    else{
        // Afficher nom & prénom
        prenom=getCookie("prenom");
        nom=getCookie("nom");
        document.getElementById("Account_or_login").innerHTML=nom+" "+prenom;
        document.getElementById("Account_or_login").href="moncompte.html";
    }
}