const target = document.querySelector('#target');

const browser = navigator.userAgentData.brands[2];

const browserName = browser.brand;
const browserVersion = browser.version;

const operatingSystem = navigator.userAgentData.platform;

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const availableWidth = window.innerWidth;
const availableHeight = window.innerHeight;

const date = new Date();

const dateTime = date.toLocaleTimeString('fi-FI', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>Browser: ${browserName} ${browserVersion}</p>
  <p>Operating System: ${operatingSystem}</p>
  <p>Screen Size: ${screenWidth} x ${screenHeight}</p>
  <p>Available Browser Space: ${availableWidth} x ${availableHeight}</p>
  <p>Date and Time: ${dateTime}</p>
`;