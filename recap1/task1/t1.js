const celsius = Number(prompt('Enter temperature in Celsius:'));

const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;

document.querySelector('#result').innerHTML =
  'Celsius: ' + celsius + ' °C<br>' +
  'Fahrenheit: ' + fahrenheit + ' °F<br>' +
  'Kelvin: ' + kelvin + ' K';