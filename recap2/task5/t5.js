function sortArray(numbers, order) {
  const newArray = [...numbers];

  if (order === 'asc') {
    newArray.sort(function(a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    newArray.sort(function(a, b) {
      return b - a;
    });
  }

  return newArray;
}

const numbers = [5, 2, 8, 1, 9];

console.log('Original:', numbers);
console.log('Ascending:', sortArray(numbers, 'asc'));
console.log('Descending:', sortArray(numbers, 'desc'));