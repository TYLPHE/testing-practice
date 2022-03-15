function reverseString(str) {
  let newStr = []
  for(let i = 0; i <= str.length; i+=1) {
    newStr[i] = str[str.length - i];
  }
  return newStr.join('');
}
module.exports = reverseString;