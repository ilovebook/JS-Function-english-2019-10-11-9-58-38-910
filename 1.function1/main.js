
function reverseString(str) {
  let strArray = str.split("");
  return strArray.reverse().join("");
}

console.log(reverseString('hello'));
