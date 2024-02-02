function editNav() {
  const x = document.getElementById("myTopnav");
  const hero_section = document.querySelector(".hero-section");
  if (x.className === "topnav") {
    x.className += " responsive";
    hero_section.className += " responsive";
  } else {
    x.className = "topnav";
    hero_section.className = "hero-section";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.getElementsByClassName("formData");


// Modal state
let is_modal_open = false;

// Form state
let is_form_submitted = false;


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  is_modal_open = true;

  setTimeout(function() {
    document.addEventListener('click', closeModalOnClickOutside);
  }, 0);
}

// validate form
function validate(){
  const first = document.getElementById("first").value.trim();
  const last = document.getElementById("last").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value.trim();
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById("checkbox1");

  let is_form_wrong = false;

  if (!first) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer votre prénom.");
    is_form_wrong = true;
  } else if (first.length < 2) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    is_form_wrong = true;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
  }

  if (!last) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer votre nom.");
    is_form_wrong = true;
  } else if (last.length < 2) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    is_form_wrong = true;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
  }

  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})+$/;

  if(!email){
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Veuillez entrer un email.");
    is_form_wrong = true;
  } else if(!emailRegExp.test(email)){
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Veuillez entrer un email valide.");
    is_form_wrong = true;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
  }

  if (!birthdate) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    is_form_wrong = true;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
  }

  if (!quantity) {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez indiquer un nombre.");
    is_form_wrong = true;
  } else if (isNaN(quantity)) {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez utiliser des chiffres uniquement.");
    is_form_wrong = true;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
  }

  if(!location)
  {
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Vous devez choisir une option.");
    is_form_wrong = true;
  }else {
    formData[5].setAttribute("data-error-visible", "false");
  }

  if(!checkbox1.checked)
  {
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    is_form_wrong = true;
  }else {
    formData[6].setAttribute("data-error-visible", "false");
  }

  if(is_form_wrong){
    return false;
  }

  document.querySelector('form').style.display = 'none';
  document.querySelector('.content_sent_form').style.display = 'flex';
  is_form_submitted = true;
  return false;
}

// Close form
var close = document.querySelector('.close');
close.addEventListener('click', function() {
  document.querySelector('.bground').style.display = 'none';
  is_modal_open = false;
  document.removeEventListener('click', closeModalOnClickOutside);
});

// Close form when form sent
var close_sent_form = document.querySelector('.close_sent_form');
close_sent_form.addEventListener('click', function() {
  document.querySelector('form').reset();
  is_form_submitted = false;
  is_modal_open = false;
  document.removeEventListener('click', closeModalOnClickOutside);
  location.reload();
});

// Close modal when Escape is pressed
document.addEventListener('keydown', function(event) {
  if (is_modal_open && (event.key === 'Escape' ||  event.key === ' ' )) {

    // Prevent default action of spacebar
    if (event.key === ' ') {
      event.preventDefault();
    }

    //check if form is submitted and reset form
    if(is_form_submitted){
      document.querySelector('form').reset(); 
      is_form_submitted = false;
      location.reload();
    }

    document.querySelector('.bground').style.display = 'none';
    is_modal_open = false;
    document.removeEventListener('click', closeModalOnClickOutside);
  }
});

// Close modal when user click outside of modal
function closeModalOnClickOutside(event) {
  if (is_modal_open && !event.target.closest('.modal-body')) {

    //check if form is submitted and reset form
    if(is_form_submitted){
      document.querySelector('form').reset();
      is_form_submitted = false;
      location.reload();
    }

    document.querySelector('.bground').style.display = 'none';
    is_modal_open = false;

    document.removeEventListener('click', closeModalOnClickOutside);
  }
}


