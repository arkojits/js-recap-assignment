const number = Number(prompt('Enter a positive integer:'));

const table = document.querySelector('#table');

for (let i = 1; i <= number; i++) {
  const row = document.createElement('tr');

  for (let j = 1; j <= number; j++) {
    const cell = document.createElement('td');

    cell.textContent = i * j;

    row.appendChild(cell);
  }

  table.appendChild(row);
}