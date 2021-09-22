// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+";
var selected = [];
var merged = [];
var passLegnth = 0;
var userPassword = '';

var genPasswordButton = document.querySelector('#generateButton');
var copyPasswordButton = document.querySelector('#copyButton');

genPasswordButton.addEventListener('click', function() {
    passReset();
    passLength = prompt('Choose a password length between 8 and 128 characters.');
    if (parseInt(passLength) < 8 || parseInt(passLength) > 128) {
        alert('Invalid length. Please choose a length between 8 and 128 characters.');
    } else if (passLength === null) {
        alert('A password will not be generated.');
    } else if (isNaN(passLength) === true || passLength === '') {
        alert('Please use numerical numbers and try again.');
    } else {
        selectedCharacters();
    }
    document.getElementById('password-form').textContent = userPassword;
});

function selectedCharacters() {
    var symbolsYes = confirm('Click OK to include special characters in your password.');
    if (symbolsYes === true) {
        selectedOption(symbols);
    }
    var numbersYes = confirm('Click OK to include numerical characters in your password.');
    if (numbersYes === true) {
        selectedOption(numbers);
    }
    var lowercaseYes = confirm('Click OK to include lowercase characters in your password.');
    if (lowercaseYes === true) {
        selectedOption(lowercase);
    }
    var uppercaseYes = confirm('Click OK to include uppercase characters in your password.');
    if (uppercaseYes === true) {
        selectedOption(uppercase);
    }
    if (uppercaseYes === false && lowercaseYes === false && numbersYes === false && symbolsYes === false) {
        alert('You must select at least one character type.');
    }
    var password = '';
    var legnth = parseInt(document.generator.legnth.value);
    for(var i = 0; i < legnth; i++) {
        
    }
}


function writePassword() {
 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
