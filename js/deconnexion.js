function funcDeconnexion() {
    //Suppression de tous les cookies
    eraseCookie("email");
    eraseCookie("password");
    eraseCookie("nom");
    eraseCookie("prenom");
    window.alert("Déconnecté avec succès!")
    window.location.replace("index.html");
}