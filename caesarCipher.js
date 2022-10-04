export default function caesarCipher(string, shift) {
  let ceasarString = '';
  // convert char to number
  for (let char of string) {
    if (char.match(/[a-z]/i)) {
      const charNumber = char.charCodeAt(0);
      let charShifted = charNumber + (shift % 26);

      if (charNumber >= 65 && charNumber <= 90) {
        if (charShifted > 90) {
          let leftOver = charShifted - 90;
          charShifted = 64 + leftOver;
        }
      }
      if (charNumber >= 97 && charNumber <= 122) {
        if (charShifted > 122) {
          let leftOver = charShifted - 122;
          charShifted = 96 + leftOver;
        }
      }

      ceasarString += String.fromCharCode(charShifted);
    } else {
      ceasarString += char;
    }
  }

  return ceasarString;
  // add shift
  // check if if wraps
}

console.log(caesarCipher('Loreminis batonezo', 2300));
