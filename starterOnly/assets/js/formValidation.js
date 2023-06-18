/**
 * Name validation
 * retourne true si <= 2 caracters et est au bon format faux sinon
 * @param {string} name 
 * @returns boolean
 */
function isName(name) {
  let nameRegex = /^[a-zA-Z-\s]+$/; // regex 
  if ((name.length > 2) && nameRegex.test(name)) {
    return true
  }
  return false
}

import { firstData } from "./variables.js";
/**
 * is first a valid name
 * @returns boulean
 */
function isFirst() {
  if (isName(first.value)) {
    firstData.setAttribute("data-error-visible", false)
    firstData.setAttribute("data-error", "")
    return true
  }
  firstData.setAttribute("data-error-visible", true)
  firstData.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
}

import { lastData } from "./variables.js";
/**
 * is last a valid name
 * @returns boulean
 */
function isLast() {
  if (isName(last.value)) {
    lastData.setAttribute("data-error-visible", false)
    lastData.setAttribute("data-error", "")
    return true
  }
  lastData.setAttribute("data-error-visible", true)
  lastData.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
}

import { emailData } from "./variables.js";
import { email } from "./variables.js";
/**
 * Email error message
 * @returns boulean
 */
function isEmail() {
  if (validEmail(email.value)) {
    emailData.setAttribute("data-error-visible", false)
    emailData.setAttribute("data-error", "")
    return true
  }
  emailData.setAttribute("data-error-visible", true)
  emailData.setAttribute("data-error", "Veuillez entrer un email valide.")
}

/**
 * Validation du mail
 * Retourne vrai si le mail est bien formater faux sinon
 * @param {string} mail l'adresse mail
 * @returns boolean
 */
function validEmail(mail) {
  let mailRegex = /^[a-z0-9-\.]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  if (mail != "" && mailRegex.test(mail) == true) {
    return true;
  }
}

import { birthdateData } from "./variables.js";
import { birthdate } from "./variables.js";
/**
 * Validation de la date d'anniversaire
 * @returns Boolean
 */
function isBirthdate() {
  if (isBirthdateValid(birthdate.value) === 'true') {
    birthdateData.setAttribute("data-error-visible", false)
    birthdateData.setAttribute("data-error", "")
    return true
  }
  birthdateData.setAttribute("data-error-visible", true)
  birthdateData.setAttribute("data-error", isBirthdateValid(birthdate.value))
  return false
}

/**
 * Renvoi le message d'erreur suivant la date donnée
 * @param {date} date 
 * @returns string
 */
function isBirthdateValid(date) {
  if (date === '') {
    return 'Veillez entrer une date'
  }
  let message = ''
  let d = new Date(date)
  if (d.getFullYear() < 1923) {
    message = "Donnez une date correcte"
  } else {
    if (d.getFullYear() > 2005) {
      message = "Vous n'êtes pas majeur"
    } else {
      message = 'true'
    }
  }
  return message
}

import { quantityData } from "./variables.js";
/**
 * is quantity a number
 * @returns Boolean
 */
function isQuantity() {
  if (isNumber(quantity.value)) {
    quantityData.setAttribute("data-error-visible", false)
    quantityData.setAttribute("data-error", "")
    return true
  }
  quantityData.setAttribute("data-error-visible", true)
  quantityData.setAttribute("data-error", "Veuillez entrer un nombre.")
}

/**
 * Test de quantity 
 * retourne vrai si c'est un nombre
 * @param {number} number 
 * @returns boolean
 */
function isNumber(number) {
  //let numberRegex = /^[0-9]+$/;
  let num = Number(number)
  if ((number != "") && (Number.isInteger(num))) {
    //if ((number != "") && (numberRegex.test(number) == true)) {
    return true;
  } else {
    return false;
  }
}

import { locationData } from "./variables.js";
/**
 * Test si une ville est cochée
 * retourne vrai dés qu'une ville est coché
 * @returns boolean
 */
function isLocationChecked() {
  let i = 1;
  while (document.getElementById('location' + i)) {
    if (document.getElementById('location' + i).checked) {
      return true;
    }
    i++;
  }
  return false;
}
/**
 * test si une ville est sélectionnée
 * @returns boolean
 */
function isLocation() {
  if (isLocationChecked()) {
    locationData.setAttribute("data-error-visible", false)
    locationData.setAttribute("data-error", "")
    return true
  }
  locationData.setAttribute("data-error-visible", true)
  locationData.setAttribute("data-error", "Veuillez sélectionner une ville.")
}

import { cgvCheckbox } from "./variables.js";
const cgvData = document.getElementById('cgvData')
// cgv check event
function cgvCheck(value) {
  if (value === true) {
    return true
  }
  return false
}

/**
 * test si la case CGV est coché
 * @returns boolean
 */
function cgv() {
  if (cgvCheck(cgvCheckbox.checked)) {
    cgvData.setAttribute("data-error-visible", false)
    cgvData.setAttribute("data-error", "")
    return true;
  }
  cgvData.setAttribute("data-error-visible", true)
  cgvData.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.")
}


// close modal confirm event
const confirm = document.getElementById('confirm')
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
function validate() {
  if (isFirst()
    && isLast()
    && isEmail()
    && isBirthdate()
    && isQuantity()
    && isLocation()
    && cgv()
  ) {
    confirm.value = 'true'
    return true;
  }
  confirm.value = 'false'
}

export { isFirst, isLast, isEmail, isBirthdate, isQuantity, isLocation, cgv, validate }