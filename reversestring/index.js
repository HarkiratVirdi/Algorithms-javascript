// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//-----------------solution 1 -----------------
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// console.log(reverse("harkirat"));

//------------------- End ----------------------

//-----------------solution 2 -----------------

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse("harkirat"));

//------------------- End ----------------------

//-----------------solution 3-----------------
// function reverse(str) {
//   let reversed = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed.push(str[i]);
//   }
//   return reversed.join("");
// }

// console.log(reverse("harkirat"));

//------------------- End ----------------------

//-----------------solution 4 -----------------
function reverse(str) {
  debugger;
  str.split("").stringSplit.reduce((acc, curr) => {
    return curr + acc;
  });

  return rever;
}

console.log(reverse("harkirat"));

//------------------- End ----------------------

module.exports = reverse;
