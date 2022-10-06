const URL = 'http://localhost:3000/';

function getAllFilms() {
    fetch(URL)
        .then(res => res.json())
        .then(json => renderFilms)
}

function renderFilms(films) {
    films.forEach(renderFilm)
}

function renderFilm(film) {
    const filmContainer = document.getElementsById('showing')
    const filmDiv = document.createElement('div')
    const filmPoster = document.getElementById('img')
    const filmTitle = document.getElementById('title')
    const filmRuntime = document.getElementById('runtime')
    const filmShowtime = document.getElementById('showtime')
    const filmTicketsAvail = document.getElementById('ticket-num')

    filmTitle.textContent = film.title;
    filmShowtime.textContent = film.showtime;
    filmTicketsAvail.textContent = (film.capacity - film[tickets-sold])

    filmPoster.src = film.poster;
    filmPoster.alt = film.title;
    filmDiv.append(filmPoster)
    filmContainer.append(div)
}

getAllFilms();

function seeAllFilms(films) {
    fetch(URL)
    .then(res => res.json())
    .then(console.log(films))

    const movieList = document.getElementById('films')
    const movieContainer = document.createElement('div')
    const filmTitle = document.createElement('h2')
    const filmPoster = document.createElement('img')
    const filmRuntime = document.createElement('p')
    const filmShowtime = document.createElement('p')

    movieList.append(movieContainer)
}
seeAllFilms(films)

document.addEventListener('click', e=> {
    e.preventDefault()
    (document.getElementById('ticket-num'))-=
})