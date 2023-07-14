// Assignment code here
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '1234567890';
var specialCharacters = '!@#$%^&*()-_=+[{]}\|;:<,>.?'
var allChar = lowerCase + upperCase + number + specialCharacters;
// Series of prompts for the pass word generator:
// lower case, upper case, numeric, and or special characters
// length of password between 8-128 characters

var charAmount = number.value;
// console.log(allChar);

function generatePassword() {
  var length = 0;
  do {
    length = prompt('How long is your password going to be? Please select a number between 8-128');
  } while (length < 8 || length > 128)

  var upperCase = confirm('Would you like to use upper case letters? Click "ok" for yes or "cancel" for no.');
  console.log(upperCase);
  var lowerCase = confirm('Would you like to use lower case letters? Click "ok" for yes or "cancel" for no.');
  console.log(lowerCase);
  var number = confirm('Would you like to use numbers? Click "ok" for yes or "cancel" for no.');
  console.log(number);
  var specialCharacters = confirm('Would you like to use special characters? Click "ok" for yes or "cancel" for no.');
  console.log(specialCharacters);


  var finalPassword = '';
  for (var i = 0; i < length; i++) {
    var charIndex = Math.floor(Math.random() * allChar.length);
    var ranChar = allChar[charIndex];
    finalPassword = finalPassword + ranChar;
  }
  console.log(finalPassword);


  return finalPassword;

}

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
