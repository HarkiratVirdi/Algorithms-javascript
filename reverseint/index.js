// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ------------------ solution 1 --------------------
// function reverseInt(n) {
//   let sign = "-";
//   let toStr = n.toString();

//   if (Math.sign(n) === -1) {
//     sign = "-";
//     toStr = toStr.substring(1);
//   } else {
//     sign = "";
//   }
//   console.log(sign);

//   return parseInt(toStr.split("").concat(sign).reverse().join(""));
// }

// console.log(reverseInt(-51));
// -------------------------- END --------------------------

//------------------ solution 3 --------------------
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

reverseInt(51);
//-------------------------- END --------------------------

module.exports = reverseInt;
