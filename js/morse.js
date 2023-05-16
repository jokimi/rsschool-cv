const TABLE = {
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
    let words = expr.split('**********');
    let letters = [];
    let regexZeros = /00/g;
    let regexLetters = /.{1,10}/g;
    let result =[];
    for(let i = 0; i< words.length; i++){
        letters.push(words[i].match(regexLetters));
        for(let l =0; l<letters.length; l++){
          letters[l] = letters[l].toString().replace(regexZeros, '');
          letters[l] = letters[l].toString().replace(/10/g, '.');
          letters[l] = letters[l].toString().replace(/11/g, '-');
          letters[l] = letters[l].split(',').map(element => element = element.replace(element,TABLE[element])).join('');
          
        }
        result[i] = letters.join('');
        
        letters = [];
    }
    
    return result.join(' ');
}

module.exports = {
    decode
}
