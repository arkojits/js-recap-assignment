const x1 = Number(prompt('Enter x coordinate of point 1:'));
const y1 = Number(prompt('Enter y coordinate of point 1:'));

const x2 = Number(prompt('Enter x coordinate of point 2:'));
const y2 = Number(prompt('Enter y coordinate of point 2:'));

const distance = Math.sqrt(
  (x2 - x1) ** 2 + (y2 - y1) ** 2
);

document.querySelector('#result').textContent =
  'Distance between the points is: ' + distance;