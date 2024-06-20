document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector(".search-bar");
    const searchSection = document.querySelector(".search-menu");
    const moviePoster = document.querySelector(".Movie-poster");
    const movieTitle = document.querySelector(".movie-title");
    const movieRating = document.querySelector(".rating");
    const movieGenre = document.querySelector(".genre");
    const movieType = document.querySelector(".type");
    const movieRuntime = document.querySelector(".runtime");
    const moviePlot = document.querySelector(".plot p");

    const MovieInfo = async (movie) => {
        const APIKey = "1534c255";
        const APIurl = `https://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`;

        const response = await fetch(APIurl);
        const data = await response.json();

        if (data.Response === "True") {
            moviePoster.src = data.Poster;
            movieTitle.textContent = data.Title;
            movieRating.textContent = `${data.imdbRating} / 10`;
            movieGenre.innerHTML = `<strong>Genre:</strong> ${data.Genre.split(', ').map(genre => `<span>${genre}</span>`).join(' ')}`;
            movieType.innerHTML = `<strong>Type:</strong> <span>${data.Type}</span>`;
            movieRuntime.innerHTML = `<strong>Run Time:</strong> <span>${data.Runtime}</span>`;
            moviePlot.textContent = data.Plot;
        } else {
            alert("Movie not found!");
        }
    }

    searchSection.addEventListener('submit', (e) => {
        e.preventDefault();
        const movie = searchBar.value.trim();
        if (movie) {
            MovieInfo(movie);
        }
    });
});
