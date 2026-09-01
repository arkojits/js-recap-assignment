const restaurantList = document.querySelector('#restaurant-list');
const dialog = document.querySelector('#restaurant-dialog');

const apiUrl =
  'https://media2.edu.metropolia.fi/restaurant/api/v1';


async function getRestaurants() {
  try {
    const response = await fetch(apiUrl + '/restaurants');

    if (!response.ok) {
      throw new Error('Could not load restaurants');
    }

    const restaurants = await response.json();

    restaurants.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });

    displayRestaurants(restaurants);

  } catch (error) {
    restaurantList.innerHTML =
      '<tr><td>Could not load restaurants.</td></tr>';

    console.error(error);
  }
}


function displayRestaurants(restaurants) {
  for (const restaurant of restaurants) {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    const address = document.createElement('td');

    name.textContent = restaurant.name;
    address.textContent = restaurant.address;

    row.appendChild(name);
    row.appendChild(address);

    restaurantList.appendChild(row);

    row.addEventListener('click', function() {
      removeHighlights();

      name.classList.add('highlight');

      showRestaurant(restaurant);
    });
  }
}


function removeHighlights() {
  const highlighted =
    document.querySelectorAll('.highlight');

  for (const item of highlighted) {
    item.classList.remove('highlight');
  }
}


async function showRestaurant(restaurant) {
  try {
    const menuUrl =
      apiUrl +
      '/restaurants/daily/' +
      restaurant._id +
      '/fi';

    const response = await fetch(menuUrl);

    if (!response.ok) {
      throw new Error('Could not load menu');
    }

    const menu = await response.json();

    let menuHtml = '';

    for (const course of menu.courses) {
      menuHtml += `
        <p>
          <strong>${course.name}</strong><br>
          Price: ${course.price || 'No price'}
        </p>
      `;
    }

    dialog.innerHTML = `
      <h2>${restaurant.name}</h2>

      <p>Address: ${restaurant.address}</p>
      <p>Postal code: ${restaurant.postalCode}</p>
      <p>City: ${restaurant.city}</p>
      <p>Phone: ${restaurant.phone}</p>
      <p>Company: ${restaurant.company}</p>

      <h3>Today's Menu</h3>

      ${menuHtml}

      <button id="close-button">Close</button>
    `;

    dialog.showModal();

    document
      .querySelector('#close-button')
      .addEventListener('click', function() {
        dialog.close();
      });

  } catch (error) {
    dialog.innerHTML = `
      <h2>${restaurant.name}</h2>

      <p>Address: ${restaurant.address}</p>
      <p>Postal code: ${restaurant.postalCode}</p>
      <p>City: ${restaurant.city}</p>

      <h3>Today's Menu</h3>

      <p>Menu could not be loaded.</p>

      <button id="close-button">Close</button>
    `;

    dialog.showModal();

    document
      .querySelector('#close-button')
      .addEventListener('click', function() {
        dialog.close();
      });

    console.error(error);
  }
}


getRestaurants();