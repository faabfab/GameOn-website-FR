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
const first = document.getElementById('first');
const last = document.getElementById('last');
const cgvCheckbox = document.getElementById('checkbox1')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closehModal);

// first name event
// ! FIXME: le test ne se refait pas si on corrige le nom
first.addEventListener('focusout', isFirst(), true);
first.addEventListener('focusin', removeError(), true);

// last name event
//last.addEventListener('focusout', isName);

// validation form event
myForm.addEventListener('submit', function(e){
  e.preventDefault();
  validate();
});

/*myForm.addEventListener('submit', function(e){
  if (isName(first.value)
      && isName(last.value)
      && validEmail(email.value)
      && isNumber(quantity.value)
      && isLocation()
      && cgv()) {&
    console.log('OK')
  }
  console.log('PAS OK')
  e.preventDefault()

})*/

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
  * @returns boolean
  */
 function validate(){
  console.log('event')
  if (isFirst()
      //&& isName(last.value)
      && validEmail(email.value)
      && isNumber(quantity.value)
      && isLocation()
      && cgv()
      ) {
    return true;
  } else {
    return false;
  }

}

function removeError() {
    this.parentElement.setAttribute("data-error-visible", false)
}

/**
 * Name validation
 * retourne true si <= 2 caracters et est au bon format faux sinon
 * @param {string} name 
 * @returns boolean
 */
function isName (name){
  let nameRegex = /^[a-zA-Z-\s]+$/; // regex 
  if ((name > 2) && nameRegex.test(name)) {
    console.log(name + " est un nom")
    //this.parentElement.setAttribute("data-error-visible", false)
    return true
  }
  console.log(name + " n'est pas un nom")
  console.log(name)
  return false
}

function isFirst() {
  console.log(this)
  this.parentElement.setAttribute("data-error-visible", false)
  if (isName(first.value)) {
    return true
  }
  this.parentElement.setAttribute("data-error-visible", true)
}

function isLast() {
  if (isName(last.value)) {
    return true
  }
  this.parentElement.setAttribute("data-error-visible", true)
}

/**
 * Validation du mail
 * Retourne vrai si le mail est bien formater faux sinon
 * @param {string} mail l'adresse mail
 * @returns boolean
 */
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

/**
 * Test de quantity 
 * retourne vrai si c'est un nombre
 * @param {number} number 
 * @returns boolean
 */
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

/**
 * Test si une ville est cochée
 * retourne vrai dés qu'une ville est coché
 * @returns boolean
 */
function isLocation () {
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

/**
 * test si la case CGV est coché
 * @returns boolean
 */
function cgv () {
  if (cgvCheck() == 'coché') {
    return true;
  }
  console.log('cgv pas checked');
  return false;
}