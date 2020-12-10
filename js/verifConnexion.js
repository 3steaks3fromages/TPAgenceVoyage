function verifConnexion(){

    if (getCookie("email")==null){
        // Afficher connexion et cacher déconnexion
        document.getElementById("Account_or_login").innerHTML="Connexion";
        document.getElementById("Account_or_login").href="connexion.html";
        document.getElementById("Deconnexion").setAttribute("hidden", true);
    }
    else{
        // Afficher nom & prénom
        prenom=getCookie("prenom");
        nom=getCookie("nom");
        document.getElementById("Account_or_login").innerHTML=nom+" "+prenom;
        document.getElementById("Account_or_login").href="moncompte.html";
        
    }
}