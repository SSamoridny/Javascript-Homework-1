//Generate a secure password when the button is clicked
//Prompts with criteria
//Length between 8 - 128 characters
//Prompt for lowercase, uppercase, special characters, numeric
//When all is answered then display in the "Your Secure Password" box


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

function generatePassword () {
      // Creation of variables
      var charSet1 = ["abcdefghijklmnopqrstuvwxyz"]

      var charSet2 = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

      var charSet3 = ["1234567890"]

      var charSet4 = ["!@#$%^&*()"]

      var charSelect = ['']

      var password = ''

      //Prompts with criteria
      var passLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters")

      var upperChoice = confirm("Would you like upper case characters? OK for YES, Cancel for NO")

      var lowerChoice = confirm("Would you like lower case characters? OK for YES, Cancel for NO")

      var numericChoice = confirm("Would you like numeric characters? OK for YES, Cancel for NO")

      var specialChoice = confirm("Would you like special characters? OK for YES, Cancel for NO")

    if (passLength >= 8 && passLength <= 128) {

      //Taking the criteria decisions and creating the array that my formula will run on
          if (lowerChoice == true) charSelect += charSet1
          if (upperChoice == true) charSelect += charSet2
          if (numericChoice == true) charSelect += charSet3
          if (specialChoice == true) charSelect += charSet4

          //Formula for looping through the array to create the password
          for (i=0; i<passLength; i++) {
          var randomChar = parseInt( Math.random() * charSelect.length)
          password += charSelect[randomChar]
        } return password;
    } else {
      alert('Please select a number between 8 - 128. Please click OK and then click Generate Password to try again')
    }
} 
