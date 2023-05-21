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

// launch modal form
function closehModal() {
  modalbg.style.display = "none";
}
