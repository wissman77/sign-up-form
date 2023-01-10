const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const form = document.querySelector("form");
const message = document.querySelector("span.error");

function checkPasswords(e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    message.textContent = "* Passwords do not match";
    password.classList.add("error");
    confirmPassword.classList.add("error");
  } else {
    message.textContent = '';
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
}

form.addEventListener('submit', checkPasswords);
confirmPassword.addEventListener('blur', checkPasswords);