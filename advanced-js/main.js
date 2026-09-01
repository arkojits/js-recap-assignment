import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const table = document.querySelector('table');
const modal = document.querySelector('dialog');
const message = document.querySelector('#message');

const allButton = document.querySelector('#all');
const sodexoButton = document.querySelector('#sodexo');
const compassButton = document.querySelector('#compass');

let restaurants = [];

const displayRestaurants = (restaurantList) => {
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Company</th>
    </tr>
  `;

  restaurantList.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      try {
        const menu = await fetchData(
          `${baseUrl}/restaurants/daily/${restaurant._id}/fi`
        );

        modal.innerHTML = restaurantModal(restaurant, menu);
        modal.showModal();
      } catch (error) {
        message.textContent = 'Could not load the menu.';
      }
    });

    table.appendChild(row);
  });
};

const getRestaurants = async () => {
  try {
    restaurants = await fetchData(`${baseUrl}/restaurants`);

    const restaurantNames = restaurants.map((restaurant) => restaurant.name);
    console.log(restaurantNames);

    displayRestaurants(restaurants);
  } catch (error) {
    message.textContent = 'Could not load restaurants.';
  }
};

allButton.addEventListener('click', () => {
  message.textContent = '';
  displayRestaurants(restaurants);
});

sodexoButton.addEventListener('click', () => {
  const sodexoRestaurants = restaurants.filter(
    (restaurant) => restaurant.company === 'Sodexo'
  );

  displayRestaurants(sodexoRestaurants);
});

compassButton.addEventListener('click', () => {
  const compassRestaurants = restaurants.filter(
    (restaurant) => restaurant.company === 'Compass Group'
  );

  displayRestaurants(compassRestaurants);
});

modal.addEventListener('click', () => {
  modal.close();
});

getRestaurants();