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
var possibleCharacterList = ''

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

   
    //Push password to HTML textbox
    passwordText.value = password
}

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 








 



