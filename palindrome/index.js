// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//------------------- solution 1 -------------------
// function palindrome(str) {
//   let reverse = "";
//   let isPalin = false;
//   for (let character of str) {
//     reverse = character + reverse;
//   }

//   if (str === reverse.split("").reverse().join("")) {
//     isPalin = true;
//   }

//   return isPalin;
// }

// palindrome("harkirat");

//-------------------- END -----------------

//------------------- solution 2 -------------------
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");

//   return str === reversed;
// }

// palindrome("harkirat");

//-------------------- END -----------------

//------------------- solution 3 -------------------
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

// palindrome("harkirat");

//-------------------- END -----------------

module.exports = palindrome;
