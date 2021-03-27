function reverser(text) {
  while (text.trim().split(" ").length < 2) {
    text = prompt(`Your text => ${text} <= is a single word.\nPlease enter at least two words :`);
  }
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  alert(`Your reversed text is : ${reversedText}`);
}
