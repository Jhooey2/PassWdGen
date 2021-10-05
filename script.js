// Assignment Code / Declared variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword(){
    console.log("checked button")

//1. Prompt the user with the criteria
//  a. Psswd length between 8-128 Chars
//  b. uppercase, lowercase, numbers, symbols
//2. Validate the input.
//3. Generate Psswd based on criteria
//4. Display Psswd to the page.    

    return "Generated Password";
}

// Write password to the #password input
var password = ''
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+";
var possibleCharacters = ''

//Function to write password
function writePassword() {
    
   var password = prompt('How many characters would you like in your password? (8-128)', '');
   
    // Password Length Validation / function stops if not a number inbetween 8-128
    password = parseInt(password)
    if (password > 128 || password < 8) {
        alert('Password length must be between 8 and 128. Try again.')
        return;
    }
    
    if (Number.isNaN(password) === true) {
        alert('Character amount must be a number. Try again.')
        return;
    }

    var symbolsConfirm = confirm('Would you like special characters?')
    var numbersConfirm = confirm('Would you like numbers?')
    var lowercaseConfirm = confirm('Would you like lowercase letters?')
    var uppercaseConfirm = confirm('Would you like uppercase Characters?')

        // Based on confirmations, type of characters are added to "possibleCharacters" string
        if (symbolsConfirm === true) {
            possibleCharacters += symbols
        }
    
        if (numbersConfirm === true) {
            possibleCharacters += numbers
        }
    
        if (lowercaseConfirm === true) {
            possibleCharacters += lowercase
        }
    
        if (uppercaseConfirm === true) {
            possibleCharacters += uppercase
        }
    
        // Function stops if no character type is selected
        if (symbolsConfirm === false && numbersConfirm === false && lowercaseConfirm === false && uppercaseConfirm === false) {
            alert('At least one character type must be selected. Try again.')
            return;
        }
        var generatedPassword = '';
        //Randomized password based on characters now in "possibleCharacters" string * password
        for (var i = 0; i < password; i++) {
            generatedPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }
   
    //Push password to HTML textbox
   // password.value = password
    document.getElementById("password").textContent = generatedPassword;
}

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 








 



