const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

// *success message

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// *error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//* Email Validation
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

/*
// * Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Username is requred");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is requred");
  } else if (!isValidEmail) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  if (password1.value === "") {
    showError(password1, "Password1 is requred");
  } else {
    showSuccess(password1);
  }
  if (password2.value === "") {
    showError(password2, "Password2 is requred");
  } else {
    showSuccess(password2);
  }
});
*/

//* Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//* Get fieldname

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//* Check Length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be at least ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkPassword() {
  const openEye = document.getElementById("myInput");
  if (openEye.type === "password") {
    openEye.type = "text";
  } else {
    openEye.type = "password";
  }
}

//* Check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password does not match");
  }
}

// ** Refactor to Clean code

// * Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password1, password2]);
  checkLength(username, 3, 15);
  checkLength(password1, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password1, password2);
});
