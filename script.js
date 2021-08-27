// Assignment code here

/*
  PSEUDOCODE

  On button click, do the following:
  1. Prompt for length of password (number between 8 and 128)
  2. Confirm using lowercase letters
  3. Confirm using uppercase letters
  4. Confirm using numbers
  5. Confirm using special characters
  6. Generate random password based on answers above.
  7. Display password in the box.

*/



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
