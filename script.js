
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

let selector = { 

numbers: "0123456789",

letters: "abcdefghijklmnopqrstuvwxyz",

capsLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

symbols: "!\"#$%&'()*+,-.:;<=>?@[\\]_^{|}~`\"",

};

function generatePassword() {

  var userPreference = "";

  var lengthOfPw = window.prompt (" Enter a number from 8 to 128 for your Password length");

  if (lengthOfPw<8) { 

    alert("Number entered is less than 8");
    return "Please try again";
  
  };

  if (lengthOfPw>128) { 

    alert("Number entered is more than 128");
    return "Please try again";
  
  };
  
  var numbers = window.confirm ("Do you want numbers in your password?");

  if (numbers) {

    userPreference += selector.numbers;

  }

  var letters = window.confirm ("Do you want letters in your password?");

  if (letters) {

    userPreference += selector.letters;

  }

  var capsLetters = window.confirm ("Do you want capital letters in your password?");

  if (capsLetters) {

    userPreference += selector.capsLetters;

  }

  var symbols = window.confirm ("Do you want symbols in your password?");

  if (symbols) {

    userPreference += selector.symbols;

  }

  var password = "";

  for (let i = 0; i < lengthOfPw; i++) {

    password += userPreference[Math.floor(Math.random() * userPreference.length)];

  }

  return password;

}

console.log(generatePassword());

