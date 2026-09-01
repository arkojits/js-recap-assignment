const numbers = [];

for (let i = 1; i <= 5; i++) {
  const number = Number(prompt('Enter number ' + i + ':'));
  numbers.push(number);
}

console.log('Numbers:', numbers);

const searchNumber = Number(prompt('Enter a number to search:'));

if (numbers.includes(searchNumber)) {
  console.log('Number ' + searchNumber + ' is found in the array.');
} else {
  console.log('Number ' + searchNumber + ' is not found in the array.');
}

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort(function(a, b) {
  return a - b;
});

console.log('Sorted Numbers:', numbers);