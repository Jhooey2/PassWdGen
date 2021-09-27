// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    console.log("checked button")

//1. Prompt the user with the criteria
//  a. Psswd length between 8-128 Chars
//  b. Lowercase, Uppercase, Numbers, Special Chars
//2. Validate the input.
//3. Generate Psswd based on criteria
//4. Display Psswd to the page.    

    return "Generated Password";
}

// Write password to the #password input
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+";

function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

} 

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 








 



