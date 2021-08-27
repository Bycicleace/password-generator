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

// Prompt for length of password between 8 and 128 characters.
// Returns succesfully prompted length
var getPasswordLength = function() {
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Enter desired length of password (8 - 128)"));
    // Checks for empty response, null response, and anything that is not a number.
    if (passwordLength === null || passwordLength === "" || isNaN(passwordLength)) {
      // Sets length to 0, which will reprompt.
      passwordLength = 0;
    }
  }
  console.log("Password Length chosen: " + passwordLength.toString())
  return passwordLength
};

// Confirm if lowercase letters should be used.
var confirmLowercase = function() {
  return confirm("Use Lowercase characters?");
};

// Confirm if uppercase letters should be used.
var confirmUppercase = function() {
  return confirm("Use Uppercase characters?");
};

// Confirm if numbers should be used.
var confirmNumbers = function() {
  return confirm("Use Numbers?");
};

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
