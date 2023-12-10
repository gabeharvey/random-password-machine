// Variables used for password generation
let passRes = [];
let resUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let resLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let resNumber = ["0","1","2","3","4","5","6","7","8","9","10"];
let resSymbol = ["!","@","#","$","%","^","&","*","(",")","_","+","{","}","|","[","]",":","<",">","?","="];
let generateBtn = document.querySelector("#generate");

// Series of prompts listed in following function
function resPrompt() {
  passLength = parseInt(prompt("👋Hello!👋 We will generate a password for you using the Random Password Machine. Please choose a your desired password length between 8 characters and 128 characters by entering number of characters in the box below 👇."));
  
  if (isNaN(passLength) || passLength > 128 || passLength < 8) {
    alert("🚫 Answer Invalid. 🚫 Please choose a number between 8 and 128 on the keypad. ex. 1️⃣2️⃣3️⃣");
    return false;
  }

  if (confirm("Include UPPERCASE letters in your NEW password? Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resUpperCase);
  }

  if (confirm("Include lowercase letters in your NEW password? Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resLowerCase);
  }

  if (confirm("Include numbers in your NEW password? Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resNumber);
  }

  if (confirm("Include symbols in your NEW password? Ex. ! @ # $ % Click 'OK' for Yes and 'Cancel' for No.")) {
    passRes = passRes.concat(resSymbol);
  }
  return true;
}

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

// Event Listener Added
generateBtn.addEventListener("click", writePassword);
