//Generate a secure password when the button is clicked
//Prompts with criteria
//Length between 8 - 128 characters
//Prompt for lowercase, uppercase, special characters, numeric
//When all is answered then display in an alert or in the box


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
