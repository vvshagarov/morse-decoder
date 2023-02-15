const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
    const letterInMorse = expr.substring(i, i + 10);
    if (letterInMorse === '**********') {
      result += ' ';
    } else {
      let letterInCode = '';
      for (let j = 0; j < letterInMorse.length; j += 2) {
        const code = letterInMorse.substring(j, j + 2);
        if (code === '10') {
          letterInCode += '.';
        } else if (code === '11') {
          letterInCode += '-';
        }
      }
      result += MORSE_TABLE[letterInCode];
    }
  }
  return result;
}

module.exports = {
    decode
}