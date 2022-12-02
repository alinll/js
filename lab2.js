function camelize(str) {
  str = str.replace(/[^a-zа-яё0-9\s]/gi, ' ');
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
let str = 'background-color';
alert(str);
alert(camelize(str));

const array = [1, 2, 3, 4, 5];
function sort(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
alert(array);
alert(sort(array));