function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// TODO: Implémenter entrées du formulaire
// TODO: Ajouter validation ou messages d'erreur
// TODO: Ajouter confirmation quand envoi réussi
// TODO: Tests manuels

//  DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector("#btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closehModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closehModal() {
  modalbg.style.display = "none";
}

 /**
  * Validation du formulaire:
  * si les champs sont correctements remplies
  *   Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  *   Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  *   L'adresse électronique est valide.
  *   Pour le nombre de concours, une valeur numérique est saisie.
  *   Un bouton radio est sélectionné.
  *   La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  * alors valider
  * sinon pas valider
  */


 function validate(){

  // Récupération des variables
  let first = document.forms["reserve"]["first"];
  let last = document.forms["reserve"]["last"];
  let email = document.forms["reserve"]["email"];
  let birthdate = document.forms["reserve"]["birthdate"];
  let quantity = document.forms["reserve"]["quantity"];
  let location = document.forms["reserve"]["location"];
  

  if (isName(first.value)
      && isName(last.value)
      && isNumber(quantity.value)
      && validEmail(email.value)
      ){
    console.log("valider");
    // return true;
  } else { 
    console.log("non valider");
    // return false;
  }
  return false;
}


function isName (name){
  if (name.length <= 1){
    console.log("trop court");
    return false;
  } else{
    console.log("c'est correct");
    return true;
  }
}

function validEmail(mail) {
  console.log("mail pas vérifier")
  return false;
}

function isNumber(number) {
  if (number.length!=0) {
    console.log("pas vide")
    //const regex = new RegExp('^\+?\d+$');
  } else {
    console.log("vide correct")
    return true;
  }
  //const regex = new RegExp('^\+?\d+$');
  //console.log(regex.test(number));
  /*if (regex.test(number)) {
    return true;
  } else {
    return false;
  }*/
  return false;
}