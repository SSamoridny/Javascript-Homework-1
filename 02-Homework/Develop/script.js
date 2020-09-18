//Generate a secure password when the button is clicked
//Prompts with criteria
//Length between 8 - 128 characters
//Prompt for lowercase, uppercase, special characters, numeric
//When all is answered then display in an alert or in the box


// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


var charSet1 = ["abcdefghijklmnopqrstuvwxyz"]

var charSet2 = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

var charSet3 = ["1234567890"]

var charSet4 = ["!@#$%^&*()"]

var result = ''

var charSelect = ['']

var passLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters")

var upperChoice = confirm("Would you like upper case characters? OK for YES, Cancel for NO")

var lowerChoice = confirm("Would you like lower case characters? OK for YES, Cancel for NO")

var numericChoice = confirm("Would you like numeric characters? OK for YES, Cancel for NO")

var specialChoice = confirm("Would you like special characters? OK for YES, Cancel for NO")

if ((upperChoice = true) && (lowerChoice = true) && (numericChoice = true) && (specialChoice = true)) {
  charSelect = charSet1 + charSet2 + charSet3 + charSet4
}