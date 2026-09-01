async function getData() {
  const url = 'https://reqres.in/api/unknown/23';

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) {
      throw new Error('Data not found');
    }

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

getData();