async function getUser() {
  const url = 'https://reqres.in/api/users/1';

  const response = await fetch(url, {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  const data = await response.json();

  console.log(data);
}

getUser();