// Assignment code here

///

// create variables, function and formula for selectors of const.

var w = true;
var x = true;
var y = true;
var z = true;

const numbers = "0123456789";

const letters = "abcdefghijklmnopqrstuvwxyz";

const capsLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const symbols = "!\"#$%&'()*+,-.:;<=>?@[\\]_^{|}~`\"";



  console.log("YES");

  if (w == true) {

    var a = numbers

    console.log (a)

  } else {

    var a = ""

  }

   if (x == true) {

    var b = letters;
    
   console.log (b);

  } else {

    var b = ""

  }

    if (y == true) {

      var c = capsLetters;

    console.log (c);

  } else {

    var c = ""

  }
     if (z == true) {
  

      var d = symbols;

      console.log (d);

    } else {

      var d = ""
  
    }

      console.log (a+b+c+d);

      var o = (a+b+c+d);
  



  console.log (o);

  //console.log (numbers + letters + capsLetters + symbols);

  console.log 

  console.log (arrayslog());


  function logit(value){

    console.log(value);
 }
 logit("something");


//Use this formula 












//var randomNumber = (Math.floor(Math.random()* number.length))


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
