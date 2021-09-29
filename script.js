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

    var symbols = confirm('Would you like special characters?')
    var numbers = confirm('Would you like numbers?')
    var lowercase = confirm('Would you like lowercase letters?')
    var uppercase = confirm('Would you like uppercase Characters?')

        // Based on confirmations, type of characters are added to "possibleCharacters" string
        if (symbols === true) {
            possibleCharacters += symbols
        }
    
        if (numbers === true) {
            possibleCharacters += numbers
        }
    
        if (lowercase === true) {
            possibleCharacters += lowercase
        }
    
        if (uppercase === true) {
            possibleCharacters += uppercase
        }
    
        // Function stops if no character type is selected
        if (symbolss === false && numbers === false && lowercase === false && uppercase === false) {
            alert('At least one character type must be selected. Try again.')
            return;
        }
    
        //Randomized password based on characters now in "possibleCharacters" string * password
        for (var i = 0; i < password; i++) {
            password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }
   
    //Push password to HTML textbox
    passwordText.value = password
}

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 








 



