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

// Main function for generating password.
var generatePassword = function() {
  var useLower = false;
  var useUpper = false;
  var useNumbers = false;
  var useSpecialCharacters = false;

  // Get the length of a password.
  var passwordLength = getPasswordLength();

  // Get criteria, with at least one selected, from user
  while (!useLower && !useUpper && !useLower && !useNumbers && !useSpecialCharacters) {
    var useLower = confirm("Use Lowercase characters?");
    var useUpper = confirm("Use Uppercase characters?");
    var useNumbers = confirm("Use Numbers?");
    var useSpecialCharacters = confirm("Use Special Characters?");

    if (!useLower && !useUpper && !useLower && !useNumbers && !useSpecialCharacters) {
      alert("You must select at least one type. Please try again.");
    }
  }

  /* Create password using criteria given. Must be at least one character for each type selected.
     To do this, We'll create a random one for each type selected, then fill the rest with random
     characters following criteria. Once the length is correct, we'll jumble the characters.
     Example:
     Using Lower, Upper, Number, SC, and 8 characters long:
     Random lower: u
     Random upper: P
     Random digit: 4
     Random SC: ]
     Random remaining: &Rjk
     Random password: &]uRPj4k

     Create functions:
        GetRandomLowercase
        GetRandomUppercase
        GetRandomNumber
        GetRandomSpecialCharacter
        GenerateRandomString
        RandomizeString
  */
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
