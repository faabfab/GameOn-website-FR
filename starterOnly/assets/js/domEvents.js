/**
 * edit responsive nav
 */
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// launch modal form
import { modalbg } from "./variables.js";

function launchModal() {
    modalbg.style.display = "block";
  }

// close modal form
function closehModal() {
  modalbg.style.display = "none";
}

// close confirm modal form
import { confirmMessage } from "./variables.js";
function closeConfirmMessage() {
  confirmMessage.style.display = "none";
}



export {editNav, launchModal, closehModal, closeConfirmMessage}
  
