async function createUser() {
  const url = 'https://reqres.in/api/users';

  const user = {
    name: 'John Doe',
    job: 'Developer',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  console.log(data);
}

createUser();