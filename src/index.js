const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const signs = [];
  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
    signs.push(expr.substring(i, i + 10));
  }

  for (let j = 0; j < expr.length; j += 10) {
    const sign = expr.substring(j, j + 10);
    if (sign === '**********') {
      result += ' ';
    } else {
      let noZeros = '';
      for (let i = 0; i < sign.length; i += 1) {
        if (sign[i] !== '0') {
          noZeros = sign.substring(i);
          break;
        }
      }

      let codeMorse = '';
      let pair = '';
      for (let i = 0; i < noZeros.length; i += 2) {
        pair = noZeros.substring(i, i + 2);
        if (pair === '10') codeMorse += '.';
        else if (pair === '11') codeMorse += '-';
      }
      result += MORSE_TABLE[codeMorse];
    }
  }
  return result;
};
