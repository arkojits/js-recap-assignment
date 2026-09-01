function sortArray(numbers) {
  const newArray = [...numbers];

  newArray.sort(function(a, b) {
    return a - b;
  });

  return newArray;
}

const numbers = [5, 2, 8, 1, 9];

console.log('Original Array:', numbers);
console.log('Sorted Array:', sortArray(numbers));