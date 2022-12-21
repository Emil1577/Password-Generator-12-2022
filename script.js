// Assignment code here


//Use this formula 

const number = "0123456789";


var randomNumber = (Math.floor(Math.random()* number.length));


const letters = "abcdefghijklmnopqrstuvwxyz"

const capsLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const symbols = "!\"#$%&'()*+,-.:;<=>?@[\\]_^{|}~`\"";



//console.log (randomNumber)

for (var i = 0; i < 4; i++) { 
  
  console.log(number[(Math.floor(Math.random()* number.length))]);

}

for (var i = 0; i < 8; i++) { 

  console.log(letters [(Math.floor(Math.random()* number.length))]);

}

for (var i = 0; i < 8; i++) { 

  console.log(capsLetters [(Math.floor(Math.random()* number.length))]);

}

for (var i = 0; i < 8; i++) { 

  console.log(symbols [(Math.floor(Math.random()* number.length))]);

}



var randomNumber = (Math.floor(Math.random()* number.length));

//console.log(randomNumber);

//const letters = "abcdefghijklmnopqrstuvwxyz";




 // console.log (number[randomNumber]);
  
var num = number[randomNumber];

// for (var i=0 ; i<8; i++) {
  
 // console.log (num [i]);

//}


var randomLetters = (Math.floor(Math.random()* letters.length));

// console.log(letters[randomLetters]);

//const capsLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var randomCapsLetters = (Math.floor(Math.random()* capsLetters.length));

// console.log(capsLetters[randomCapsLetters]);






var randomSymbols = (Math.floor(Math.random()* symbols.length));

// console.log(symbols[randomSymbols]);



// for (var i=0; i < 8; i++) {

 // console.log ("Great to see you " + randomSymbols[i] + " !");
  
  // }



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
