const numbers = [];

while (true) {
  const input = prompt("Enter a number or 'done' to finish:");

  if (input === 'done') {
    break;
  }

  numbers.push(Number(input));
}

const evenNumbers = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

if (evenNumbers.length > 0) {
  document.querySelector('#result').textContent =
    'Even Numbers: ' + evenNumbers.join(', ');
} else {
  document.querySelector('#result').textContent =
    'Even Numbers: None';
}

document.querySelector('#end').textContent = 'End of program.';