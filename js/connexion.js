function initialisation(){
    //verifConnexion();
}

window.onload = function() {
    var form = document.getElementById('form');
    form.onsubmit = function() {
        return isValidForm();
    }
}

function isValidForm(){
    var email=document.getElementById("idEmail").value;
    var password= document.getElementById("idPassword").value;

    fetch('../json/user_data.json')
    .then(response => response.json())
    .then(data => {
        var connexion_failed=true;
        for(user in data){
          if (data[user]["email"]==email && data[user]["password"] == password){
              connexion_failed=false;
              setCookie("email",email,1000);
              setCookie("password",password,1000);
              setCookie("nom",data[user]["nom"],1000);
              setCookie("prenom",data[user]["prenom"],1000);
              window.alert("Connexion effectuée avec succès!");
              window.location.replace("index.html");
          }
        }
        if(connexion_failed == true){
            window.alert("Email et/ou mot de passe incorrect");
        }
    });
}
