const key = process.env.VITE_API_KEY;
const token = process.env.VITE_TOKEN;
const fetch = require('node-fetch');
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQxNDEyNGM5N2VhNWIyMGM4MTI4NGVlYjAxMzU5YSIsIm5iZiI6MTcyMTUwNjg1NS4wMzQzNDcsInN1YiI6IjY2OWMxYjU2OWMwMWJkMzYwN2NkNWEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYkGQ_XW0KVwt0XuxcsknAF4t2xTOKkr93wI-91i9WA'
    }
};

fetch(url, options, token, key)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));