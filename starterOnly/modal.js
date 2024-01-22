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
const formData = document.getElementsByClassName("formData");




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// validate form
function validate(){
  var first = document.getElementById("first").value.trim();
  var last = document.getElementById("last").value.trim();
  var email = document.getElementById("email").value.trim();
  var birthdate = document.getElementById("birthdate").value;
  var quantity = document.getElementById("quantity").value.trim();
  var location = document.querySelector('input[name="location"]:checked');
  var checkbox1 = document.getElementById("checkbox1");

  if (!first) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer votre prénom.");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
  }

  if(first.length < 2){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  }  else {
    formData[0].setAttribute("data-error-visible", "false");
  }

  if (!last) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer votre nom.");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
  }

  if(last.length < 2){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
  }

  var emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!emailRegExp.test(email)){
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Veuillez entrer un email valide.");
    return false;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
  }

  if (!birthdate) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
  }

  if (!quantity) {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez indiquer un nombre.");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
  }

  if(!location)
  {
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Vous devez choisir une option.");
    return false
  }else {
    formData[5].setAttribute("data-error-visible", "false");
  }

  if(!checkbox1.checked)
  {
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    return false
  }else {
    formData[6].setAttribute("data-error-visible", "false");
  }


  document.querySelector('form').style.display = 'none';
  document.querySelector('.content_sent_form').style.display = 'flex';
  return false;
}

// Close form
var close = document.querySelector('.close');
close.addEventListener('click', function() {
  document.querySelector('.bground').style.display = 'none';
});

// Close form when form sent
var close_sent_form = document.querySelector('.close_sent_form');
close_sent_form.addEventListener('click', function() {
  document.querySelector('form').reset();
  location.reload();
});

