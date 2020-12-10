function initialisation(){
    //verifConnexion();
}

function isValidForm(){
    /*
    1- Recuperer le json
    2- Lire le json
    3- Ajouter le cookie
    */
   var email=document.getElementById("idEmail");
   var password= document.getElementById("idPassword");

   fetch('../json/destinations_data.json')
  .then(response => response.text())
  .then(data => {
    window.alert(data);
    console.log(data);
    return false;
  });
}

window.onload = function() {
    var form = document.getElementById('form');
    form.onsubmit = function() {
        return isValidForm();
    }
}

