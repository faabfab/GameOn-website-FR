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

const myForm = document.getElementById('myForm');

const cgvCheckbox = document.getElementById('checkbox1')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closehModal);

// validation form event
myForm.addEventListener('submit', validate);

// cgv checkbox event
cgvCheckbox.addEventListener('click', cgvCheck)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closehModal() {
  modalbg.style.display = "none";
}

// cgv check event
function cgvCheck() {
  /**
   * au click on on enleve ou pas le check
   */
  if (cgvCheckbox.checked === true) {
    //cgvCheckbox.checked = false;
    console.log('coché');
    return 'coché'
  }
  else{
    console.log('décoché');
    //cgvCheckbox.checked = true;
    return 'décoché'
  }
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
  let first = document.getElementById('first');
  let last = document.getElementById('last');
  if (isName(first.value)
      && isName(last.value)
      && isNumber(quantity.value)
      && validEmail(email.value)
      && isLocation()
      && cgv()
      ) {
    return true;
  } else {
    return false;
  }

}


function isName (name){
  let nameRegex = /^[a-zA-Z-\s]+$/;
  if (name.length <= 1){
    console.log("trop court");
    return false;
  } else{
    console.log("c'est correct");
    if (nameRegex.test(name) == true) {
      console.log("c'est un nom");      
      return true;
    } else {
      console.log("c'est pas un nom");
      return false;
    }
  }
}

function validEmail(mail) {
  let mailRegex = /^[a-z0-9-\.]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  if (mail=='') {
    console.log("mail vide")
  return false;
  } else {
    if (mailRegex.test(mail) == true) {
      console.log("mail valide")
      return true;
    } else {
      console.log("mail non valide")
      return false;
    }
  }
  
}

function isNumber(number) {
  let numberRegex = /^[0-9]+$/;
  // TODO: faire cas si c'est vide
  if (numberRegex.test(number) == true) {
    console.log("c'est un nombre");
    return true;
  } else{
    console.log("c'est pas un nombre");
    return false;
  }
}

function isLocation () {
  /**
   * tester si au moins un check
   */
  let i = 1;
  while (document.getElementById('location'+i)) {
    if (document.getElementById('location'+i).checked) {
      console.log(document.getElementById('location'+i).value);
      return true;
    }
    i++;
  }
  console.log('Pas de ville checked');
  return false;
}

function cgv () {
  if (cgvCheck() == 'coché') {
    return true;
  }
  console.log('cgv pas checked');
  return false;
}