const movies = [];

const movieCount = Number(
  prompt('How many movies do you want to rate?')
);

for (let i = 0; i < movieCount; i++) {
  const title = prompt('Enter movie title:');
  const rating = Number(prompt('Enter rating from 1 to 5:'));

  const movie = {
    title: title,
    rating: rating
  };

  movies.push(movie);
}

movies.sort(function(a, b) {
  return b.rating - a.rating;
});

let movieList = '';

for (const movie of movies) {
  movieList +=
    '<p>' + movie.title + ' - Rating: ' + movie.rating + '/5</p>';
}

document.querySelector('#movies').innerHTML = movieList;

const highestRated = movies[0];

document.querySelector('#highest').textContent =
  highestRated.title + ' - Rating: ' + highestRated.rating + '/5';