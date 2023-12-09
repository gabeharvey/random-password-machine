// Variables used for password generation
let passRes = [];
let resUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let resLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let resNumber = ["0","1","2","3","4","5","6","7","8","9","10"];
let resSymbol = ["!","@","#","$","%","^","&","*","(",")","_","+","{","}","|","[","]",":","<",">","?"];
let generateBtn = document.querySelector("#generate");

// Functions listed below
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
  for(let i = 0; i < passLength; i++) {
    let randomPass = Math.floor(Math.random() * passRes.length);
    password = password + passRes[randomPass];
  }
  return password;
}

function resPrompt() {
  passLength = parseInt(prompt("Please choose a password length between 8 characters and 128 characters by entering number of characters desired in the box below 👇."));
  
  if (isNaN(passLength) || passLength > 128 || passLength < 8) {
    alert("🚫 Answer Invalid. 🚫 Please choose a number between 8 and 128 on the keypad. ex. 1️⃣2️⃣3️⃣");
    return false;
  }

  if (confirm("Include UPPERCASE letters in password? Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resUpperCase);
  }

  if (confirm("Include lowercase letters in password? Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resLowerCase);
  }

  if (confirm("Include numbers in password? Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resNumber);
  }

  if (confirm("Inclue symbols in password? Ex. ! @ # $ % Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resSymbol);
  }
  return true;

}

// Event Listener Added
generateBtn.addEventListener("click", writePassword);
