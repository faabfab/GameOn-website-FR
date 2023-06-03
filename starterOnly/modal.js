function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
const firstData = document.getElementById('firstData');

const last = document.getElementById('last');
const lastData = document.getElementById('lastData');

const email = document.getElementById('email')
const emailData = document.getElementById('emailData')

const quantity = document.getElementById('quantity')
const quantityData = document.getElementById('quantityData')

const locationData = document.getElementById('locationData')

const cgvCheckbox = document.getElementById('checkbox1')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closehModal);

// first name event
first.addEventListener('focusout', function(e){
  e.preventDefault()
  isFirst()
});

// last name event
last.addEventListener('focusout', function(e){
  e.preventDefault()
  isLast()
});

// email event
email.addEventListener('focusout', function(e){
  e.preventDefault()
  isEmail()
});

// quantity event
quantity.addEventListener('focusout', function(e){
  e.preventDefault()
  isQuantity()
});

// validation form event
myForm.addEventListener('submit', function(e){
  if (validate()) {
    return true;
  } else{
    e.preventDefault();
  }
});

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
  if (cgvCheckbox.checked === true) {
    console.log('coché');
    return 'coché'
  }
  else{
    console.log('décoché');
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
  if (isFirst()
      && isLast()
      && isEmail()
      && isQuantity()
      /*&& isLocation()
      && cgv()
      */
      ) {
    return true;
  }
}

/**
 * Name validation
 * retourne true si <= 2 caracters et est au bon format faux sinon
 * @param {string} name 
 * @returns boolean
 */
function isName (name){
  let nameRegex = /^[a-zA-Z-\s]+$/; // regex 
  if ((name.length > 2) && nameRegex.test(name)) {
    console.log(name + " est un nom")
    return true
  }
  console.log(name + " n'est pas un nom")
  return false
}

/**
 * is first a valid name
 * @returns boulean
 */
function isFirst() {
  console.log(first.value)
  if (isName(first.value)) {
    firstData.setAttribute("data-error-visible", false)
    firstData.setAttribute("data-error","")
    return true
  }
  firstData.setAttribute("data-error-visible", true)
  firstData.setAttribute("data-error","Veuillez entrer 2 caractères ou plus pour le champ du nom.")
}
/**
 * is last a valid name
 * @returns boulean
 */
function isLast() {
  if (isName(last.value)) {
    lastData.setAttribute("data-error-visible", false)
    lastData.setAttribute("data-error","")
    return true
  }
  lastData.setAttribute("data-error-visible", true)
  lastData.setAttribute("data-error","Veuillez entrer 2 caractères ou plus pour le champ du nom.")
}

function isEmail() {
  if (validEmail(email.value)) {
    emailData.setAttribute("data-error-visible", false)
    emailData.setAttribute("data-error","")
    return true
  }
  emailData.setAttribute("data-error-visible", true)
  emailData.setAttribute("data-error","Veuillez entrer un email valide.")
}

/**
 * Validation du mail
 * Retourne vrai si le mail est bien formater faux sinon
 * @param {string} mail l'adresse mail
 * @returns boolean
 */
function validEmail(mail) {
  let mailRegex = /^[a-z0-9-\.]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  if (mail!="" && mailRegex.test(mail) == true) {
    console.log("mail valide")
    return true;
  } 
}

/**
 * is quantity a number
 * @returns Boolean
 */
function isQuantity() {
  if (isNumber(quantity.value)) {
    quantityData.setAttribute("data-error-visible", false)
    quantityData.setAttribute("data-error","")
    return true
  }
  quantityData.setAttribute("data-error-visible", true)
  quantityData.setAttribute("data-error","Veuillez entrer un nombre.")
}

/**
 * Test de quantity 
 * retourne vrai si c'est un nombre
 * @param {number} number 
 * @returns boolean
 */
function isNumber(number) {
  let numberRegex = /^[0-9]+$/;
  if ((number != "") && (numberRegex.test(number) == true)) {
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