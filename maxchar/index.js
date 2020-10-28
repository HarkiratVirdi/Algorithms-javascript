// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//------------------solution 1 ---------------------------
// function maxChar(str) {
//   const obje = {};
//   let arra = [];

//   for (let word of str) {
//     if (!obje[word]) {
//       obje[word] = 1;
//     } else {
//       obje[word]++;
//     }
//   }

//   let max = 0;

//   for (const [key, value] of Object.entries(obje)) {
//     if (value >= max) {
//       max = value;
//       arra.push(key);
//     }
//   }

//   console.log(obje);

//   return arra[arra.length - 1];
// }

// maxChar("abcccc ccccccd");

//---------------------END--------------------

//---------------------solution 2------------------
function maxChar(str) {
  const obje = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    obje[char] = obje[char] + 1 || 1;
  }

  for (let chars in obje) {
    if (obje[chars] >= max) {
      max = obje[chars];
      maxChar = chars;
    }
  }

  return maxChar;
}

maxChar("abcccc ccccccd");
//----------------------------END----------------------------

module.exports = maxChar;
