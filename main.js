// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*()_+"

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

function writePassword() {
 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
