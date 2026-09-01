const side1 = Number(prompt('Enter first side:'));
const side2 = Number(prompt('Enter second side:'));
const side3 = Number(prompt('Enter third side:'));

let triangleType;

if (side1 === side2 && side2 === side3) {
  triangleType = 'Equilateral triangle';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  triangleType = 'Isosceles triangle';
} else {
  triangleType = 'Scalene triangle';
}

document.querySelector('#result').textContent = triangleType;