## Password-Generator-12-2022

## Description:

This webpage will allow you to create a random password.  With your choice of the length of the password and also gives you an option to include numbers, letters, capital letters and symbols.

Create a list of objects as a selector.  This will be our selector on which objects the UI would like to include in their password.

    let selector = { 

    numbers: "0123456789",

    letters: "abcdefghijklmnopqrstuvwxyz",

    capsLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

    symbols: "!\"#$%&'()*+,-.:;<=>?@[\\]_^{|}~`\"",

    };
    
Created a function named "generatePassword" based on the given script.

    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

Here are the function.  Variable "userPreference" was created to generate the random password based of the UI preference.  
var LengthOfPw is created to ask UI for the number length of the password desired.

    function generatePassword() {

      var userPreference = "";

      var lengthOfPw = window.prompt (" Enter a number from 8 to 128 for your Password length");
      
      


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
## Setting up the algorithms

### Set variables and constants.  Created a function (arrayslog) to select which constants will log based on the variables. 

### Was able to get the arrays with functions needed to suffice the password generator


