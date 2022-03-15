function caesarCipher(str, shift){
  let char = []
  for(let i = 0; i < str.length; i += 1) {
    char[i] = str[i].charCodeAt(0);
  }

  let cipheredCode = char.map((element) => {
    let shifted = element + shift; 
    if(shifted > 122) {
      return shifted - 122;
    }
    if (element >= 97 && element <= 122 || element >= 65 && element <= 90) {
     return shifted;
    }
    
    return shifted;
  });

  let cipheredChar = cipheredCode.map(element => {
    return String.fromCharCode(element);
  });

  // return cipheredCode
  return cipheredChar.join('')
}

module.exports = caesarCipher;
