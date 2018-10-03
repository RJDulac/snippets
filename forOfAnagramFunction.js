function anagram (x) {
  reverse = [];
  for(char of x) {
  reverse = char + reverse;
}
return reverse;
}


console.log(anagram("test"));