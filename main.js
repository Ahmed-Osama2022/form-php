/**
 * Global Variables
 */
const usernameIn = document.getElementById("username");
const passwordIn = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const ErrorMsg = `Please enter a valid input!`;

window.onload = () => {
  usernameIn.focus();
  btnShow();
};

/**
 * Error Handling
 */
let isUsernameValid = false;
let isPasswordValid = false;

// Function to enable/disable submit button
function btnShow() {
  if (isUsernameValid && isPasswordValid) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}

function usernameValidation(value) {
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  return usernameRegex.test(value);
}

function passwordValidation(value) {
  return value.length >= 6; // Password must be at least 6 characters
}
// Check the user input for username
usernameIn.addEventListener("input", function (event) {
  // Log the input value or handle the event
  console.log("email changed to:", event.target.value);

  if (usernameValidation(event.target.value)) {
    isUsernameValid = true;
    event.target.classList.remove("disabled-form");
  } else {
    isUsernameValid = false;
    event.target.classList.add("disabled-form");
  }
  btnShow();
});

// Check the user input for password
passwordIn.addEventListener("input", function (event) {
  if (passwordValidation(event.target.value)) {
    isPasswordValid = true;
    event.target.classList.remove("disabled-form");
  } else {
    isPasswordValid = false;
    event.target.classList.add("disabled-form");
  }
  btnShow();
});

//
submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
});

/**
 * On submit => PHP
 */
