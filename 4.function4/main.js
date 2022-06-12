function countWords(message) {
  let strArray = message.split(" ");
  return strArray.length;
}
console.log(countWords('Good morning, I love JavaScript.'));
