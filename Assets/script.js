// Assignment code here
let passRes = [];
let resUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let resLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let resNumber = ["0","1","2","3","4","5","6","7","8","9","10"];
let resSymbol = ["!","@","#","$","%","^","&","*","(",")","_","+","{","}","|","[","]",":","<",">","?"];

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let validPass = resPrompt();
  let passwordText = document.querySelector("#password");
  
  if(validPass) {
  let finalPass = generatePassword();
  passwordText.value = finalPass;
  }
}

function generatePassword () {
  let password = "";
  for(var i = 0; i < passLength; i++) {
    let randomPass = Math.floor(Math.random() * passRes.length);
    password = password + passRes[randomPass];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function resPrompt() {
  passLength = parseInt(prompt("Please choose a password length between 8 characters and 128 characters by entering number of characters desired."));
  
  if (isNaN(passLength) || passLength > 128 || passLength < 8) {
    alert("Password length must be between 8 characters and 128 characters. Please enter a number on the keyboard or number keypad.");
    return false;
  }

  if (confirm("Include UPPERCASE letters in password? Please answer YES or NO.")) {
    passRes = passRes.concat(resUpperCase);
  }

  if (confirm("Include lowercase letters in password? Please answer YES or NO")) {
    passRes = passRes.concat(resLowerCase);
  }

  if (confirm("Include numbers in password? Please answer YES or NO")) {
    passRes = passRes.concat(resNumber);
  }

  if (confirm("Inclue symbols in password? Ex. ! @ # $ % Please answer YES or NO")) {
    passRes = passRes.concat(resSymbol);
  }
  return true;

}