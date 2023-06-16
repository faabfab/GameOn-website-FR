// CONFIRMATION 
import { $_GET } from "./getModule.js";
console.log("CONIFIRMATION : " + $_GET('confirm'))
if ($_GET('confirm') === 'true') {
  confirmMessage.setAttribute("style", "display:block")
}
// CONFIRMATION end

// DOM EVENTS
// nav event
const navEdit = document.getElementById('navEdit');
import { editNav } from "./domEvents.js";
navEdit.addEventListener("click", editNav)

// launch modal event
const modalBtn = document.querySelectorAll(".modal-btn");
import { launchModal } from "./domEvents.js";
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
const closeBtn = document.querySelector("#btn-close");
import { closehModal } from "./domEvents.js";
closeBtn.addEventListener("click", closehModal);

// Close confirmation modal
const closeBtnConfirm = document.querySelector("#btn-closeConfirm");
const closeBtnConfirm2 = document.querySelector("#closeBtnConfirm2");
import { closeConfirmMessage } from "./domEvents.js";
closeBtnConfirm.addEventListener("click", closeConfirmMessage);
closeBtnConfirm2.addEventListener("click", closeConfirmMessage)
// DOM EVENTS end

// FORM EVENTS
// first name event
const first = document.getElementById('first');
import { isFirst } from "./formValidation.js";
first.addEventListener('focusout', function (e) {
  e.preventDefault()
  isFirst()
});

// last name event
const last = document.getElementById('last');
import { isLast } from "./formValidation.js";
last.addEventListener('focusout', function (e) {
  e.preventDefault()
  isLast()
});

// email event
import { email } from "./variables.js";
import { isEmail } from "./formValidation.js";
email.addEventListener('focusout', function (e) {
  e.preventDefault()
  isEmail()
});

// birthdate event
import { birthdate } from "./variables.js";
import { isBirthdate } from "./formValidation.js";
birthdate.addEventListener('focusout', function (e) {
  e.preventDefault()
  isBirthdate()
});

// quantity event
import { quantity } from "./variables.js";
import { isQuantity } from "./formValidation.js";
quantity.addEventListener('focusout', function (e) {
  e.preventDefault()
  isQuantity()
});

// cgv checkbox event
import { cgvCheckbox } from "./variables.js";
import { cgv } from "./formValidation.js";
cgvCheckbox.addEventListener('click', cgv)

// validation form event
const myForm = document.getElementById('myForm');
import { validate } from "./formValidation.js";
myForm.addEventListener('submit', function (e) {
  if (validate()) {
    return true;
  } else {
    e.preventDefault();
  }
});

// FORM EVENTS end