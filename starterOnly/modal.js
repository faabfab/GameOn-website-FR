
// TODO: Ajouter confirmation quand envoi réussi :
/**
 * faire un input checkbox hidden confirm
 * si le formulaire est valider confirm = checked
 * sur index.html on teste si confirm.checked 
 *  on fait apparaitre la div de confirmation
 */
// TODO: Tests manuels


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


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

const birthdate = document.getElementById('birthdate')
const birthdateData = document.getElementById('birthdateData')

const quantity = document.getElementById('quantity')
const quantityData = document.getElementById('quantityData')

const locationData = document.getElementById('locationData')

const cgvCheckbox = document.getElementById('checkbox1')
const cgvData = document.getElementById('cgvData')

const confirm = document.getElementById('confirm')
const confirmMessage = document.getElementById('confirmMessage')
const closeBtnConfirm = document.querySelector("#btn-closeConfirm");
const closeBtnConfirm2 = document.querySelector("#btn-closeConfirm2");


// CONFIRMATION 
/**
 * équivalant de la fonction PHP
 * @param {string} param 
 * @returns string
 */
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

console.log("CONIFIRMATION : " + $_GET('confirm'))
if ($_GET('confirm') === 'true') {
  confirmMessage.setAttribute("style","display:block")
}
// CONFIRMATION END

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closehModal);

// close modal confirm event
closeBtnConfirm.addEventListener("click", closeConfirmMessage);
//closeBtnConfirm2.addEventListener("click", closeConfirmMessage)

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

// birthdate event
birthdate.addEventListener('focusout', function(e){
  e.preventDefault()
  isBirthdate()
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

// close confirm modal form
function closeConfirmMessage() {
  //confirm.setAttribute("value","false")
  confirmMessage.style.display = "none";
}

// cgv check event
function cgvCheck() {
  if (cgvCheckbox.checked === true) {
    console.log('coché');
    return true
  }
  console.log('décoché');
  return false
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
      && isBirthdate()
      && isQuantity()
      && isLocation()
      && cgv()
      ) {
        confirm.value = 'true'
        console.log('CONFIRME !!')
    return true;
  }
}

/**
 * Validation de la date d'anniversaire
 * @returns Boolean
 */
function isBirthdate() {
  console.log(isBirthdateValid(birthdate.value))
  if (isBirthdateValid(birthdate.value)==='true') {
    birthdateData.setAttribute("data-error-visible", false)
    birthdateData.setAttribute("data-error","")
    return true
  }
  birthdateData.setAttribute("data-error-visible", true)
  birthdateData.setAttribute("data-error",isBirthdateValid(birthdate.value))
  return false
}

/**
 * Renvoi le message d'erreur suivant la date donnée
 * @param {date} date 
 * @returns string
 */
function isBirthdateValid(date) {
  let d = new Date(date)
  if (d.getFullYear() < 1923) {
    message = "Donnez un date correcte"
  } else{
    if (d.getFullYear() > 2005) {
      message= "Vous n'êtes pas majeur"
    } else{
      message = 'true'
    }
  }
  return message
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
  let num = Number(number)
  if ((number != "") && (Number.isInteger(num))) {
  //if ((number != "") && (numberRegex.test(number) == true)) {
      console.log(Number.isInteger(num) + "c'est un nombre");
    return true;
  } else{
    console.log(Number.isInteger(num) + "c'est pas un nombre");
    return false;
  }
}

/**
 * Test si une ville est cochée
 * retourne vrai dés qu'une ville est coché
 * @returns boolean
 */
function isLocationChecked () {
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
 * test si une ville est sélectionnée
 * @returns boolean
 */
function isLocation() {
  if (isLocationChecked()) {
    locationData.setAttribute("data-error-visible", false)
    locationData.setAttribute("data-error","")
    return true
  }
  locationData.setAttribute("data-error-visible", true)
  locationData.setAttribute("data-error","Veuillez sélectionner une ville.")
}

/**
 * test si la case CGV est coché
 * @returns boolean
 */
function cgv () {
  if (cgvCheck()) {
    cgvData.setAttribute("data-error-visible", false)
    cgvData.setAttribute("data-error","")
    return true;
  }
  console.log('cgv pas checked');
  cgvData.setAttribute("data-error-visible", true)
  cgvData.setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions.")
}