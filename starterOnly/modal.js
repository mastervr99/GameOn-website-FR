function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstError = document.getElementById("firstError");
const lastError = document.getElementById("lastError");
const emailError = document.getElementById("emailError");
const quantityError = document.getElementById("quantityError");
const locationError = document.getElementById("locationError");
const checkbox1Error = document.getElementById("checkbox1Error");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// validate form
function validate(){
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var email = document.getElementById("email").value;
  var quantity = document.getElementById("quantity").value;
  var location = document.getElementById("location").value;
  var checkbox1 = document.getElementById("checkbox1").value;

  if(first.length < 2){
    firstError.textContent = "Le prénom doit contenir au moins deux caractères !";
    return false;
  }

  if (!first) {
    firstError.textContent = "Le champs prénom ne doit pas être vide !";
    return false;
  }

  if(last.length < 2){
    lastError.textContent = "Le nom doit contenir au moins deux caractères !";
    return false;
  }

  if (!last) {
    lastError.textContent = "Le champs nom ne doit pas être vide !";
    return false;
  }

  var emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!emailRegExp.test(email)){
    emailError.textContent = "L'email doit être valide !";
    return false;
  }


  alert("ok");
  return true
}


