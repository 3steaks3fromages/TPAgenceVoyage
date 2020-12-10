function funcDeconnexion() {
    //Suppression des cookies de connexion
    eraseCookie("email");
    eraseCookie("password");
    eraseCookie("nom");
    eraseCookie("prenom");
    window.alert("Déconnecté avec succès!");
    window.location.replace("index.html");
}