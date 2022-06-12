function alphabetSort(message) {
  let strArray = message.split("");
  return strArray.sort().join("");
}

console.log(alphabetSort('hello')); 
