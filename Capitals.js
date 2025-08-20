function capitalizeFirstLetter(str) {
  let words = str.split(' ');
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return capitalizedWords.join(' ');
}

console.log(capitalizeFirstLetter("hello world")); 

