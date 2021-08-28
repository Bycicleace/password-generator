// Assignment code here

/*
  Main Process

  On button click, do the following:
  1. Prompt for length of password (number between 8 and 128)
  2. Confirm using lowercase letters
  3. Confirm using uppercase letters
  4. Confirm using numbers
  5. Confirm using special characters
  6. Generate random password based on answers above.
  7. Display password in the box.

*/

// the specialCharacters array gathers all ascii characters that are not functions,
// spaces, numbers, or letters.
var specialCharacters = [];
for (i = 33; i <= 47; i++) {
  specialCharacters.push(String.fromCharCode(i));
}
for (i = 58; i <= 64; i++) {
  specialCharacters.push(String.fromCharCode(i));
}
for (i = 91; i <= 96; i++) {
  specialCharacters.push(String.fromCharCode(i));
}
for (i = 123; i <= 126; i++) {
  specialCharacters.push(String.fromCharCode(i));
}

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

// Gets a random character in an Ascii range. Can use this function for
// lowercase letters, uppercase letters, and everything.
var getRandomAsciiCharacter = function(min, max) {
  // takes the floor of a random number between min and max.
  var index = min + Math.floor((Math.random() * (max - min)));

  // Change the index into the Ascii representation of it
  var asciiCharacter = String.fromCharCode(index);

  // Returns character
  return asciiCharacter;
}

var getRandomLowercase = function() {
  return getRandomAsciiCharacter(97,122);
}

var getRandomUppercase = function() {
  return getRandomAsciiCharacter(65,90);
}

// This function returns a digit 0 - 9
var getRandomDigit = function() {
  // the lowest digit is 0, and the highest is 9.
  var randomNumber = Math.floor(Math.random() * 10);

  // Return the number generated.
  return randomNumber;
}

var getRandomSpecialCharacter = function() {
  // generates a random index for the specialCharacters array.
  var index = Math.floor(Math.random() * specialCharacters.length);

  // Returns the character at that index.
  return specialCharacters[index];
}

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

  // For this, an array of applicable functions is created. Each function that is needed will
  // get added to the array. Then, we'll call each function, one at a time, then randomly until the
  // length requirement is met.
  var functions = [];

  if (useLower) {
    functions.push(getRandomLowercase);
  }
  if (useUpper) {
    functions.push(getRandomUppercase);
  }
  if (useNumbers) {
    functions.push(getRandomDigit);
  }
  if (useSpecialCharacters) {
    functions.push(getRandomSpecialCharacter);
  }

  var returnString = ""
  for (i = 0; i < functions.length; i++) {
    returnString = returnString + functions[i]();
  }
  
  while (returnString.length < passwordLength) {
    returnString = returnString + functions[Math.floor(Math.random() * functions.length)]();
  }

  return returnString;
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
