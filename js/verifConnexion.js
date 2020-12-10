function verifConnexion(){
    /* Structure cookies:
    0: email
    1: mdp
    2: nom
    3: prenom
    */
    var cookies = document.cookie;
    if (cookies == ""){
        // Afficher connexion
        document.getElementById("Account_or_login").innerHTML="Connexion";
        document.getElementById("Account_or_login").href="connexion.html";
    }
    else{
        prenom=cookies[3];
        nom=cookies[2];
        document.getElementById("Account_or_login").innerHTML=nom+" "+prenom;
        document.getElementById("Account_or_login").href="moncompte.html";
    }
}