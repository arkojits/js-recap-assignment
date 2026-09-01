const number = Number(prompt('Enter a positive integer:'));

let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}

document.querySelector('#result').textContent =
  'The sum is: ' + sum;