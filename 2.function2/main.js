function palindrome(message) {
  // wirte your code here
  let strArray = message.split("");
  for (let i = 0; i < strArray.length / 2; i++) {
    if (strArray[i] !== strArray[strArray.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome('hello')); // false
console.log(palindrome('abcba')); // true
