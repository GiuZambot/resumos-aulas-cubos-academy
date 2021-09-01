
const host = 'https://tmdb-proxy.cubos-academy.workers.dev/3/';
const endPointMovies = host + 'discover/movie?language=pt-BR&include_adult=false';
const endPointSearch = host + 'search/movie?language=pt-BR&include_adult=false&query=';
const endPointDia = host + 'movie/436969?language=pt-BR';
const endPointDiaVideo = host + 'movie/436969/videos?language=pt-BR';
const endPointModal = host + 'movie/';
const language = '?language=pt-BR';
const movies = document.querySelector('.movies');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const input = document.querySelector('input');
const modal = document.querySelector('.modal');
const btnTheme = document.querySelector('.btn-theme');

let tema = localStorage.getItem('tema');
tema = tema ? tema : 'light';
localStorage.setItem('tema', tema);
btnTheme.src =
    tema === 'light' ? "./assets/light-mode.svg" : "./assets/dark-mode.svg";
document.body.style.
    setProperty('--color-back', tema === 'light' ? '#FFF' : '#242424');
document.body.style.
    setProperty('--color-highlight', tema === 'light' ? '#000' : '#FFF');
document.body.style.
    setProperty('--color-hl-info', tema === 'light' ? '#FFF' : '#454545');
document.body.style.
    setProperty('--color-border', tema === 'light' ? '#979797' : '#FFF');
let movieArr = [];
let pagesTotal = 0;
let pagesAtual = 0;

const trocarTema = () => {
    if (tema === 'light') {
        localStorage.setItem('tema', 'dark');
        tema = 'dark';
        btnTheme.src = "./assets/dark-mode.svg";
        document.body.style.setProperty('--color-back', '#242424');
        document.body.style.setProperty('--color-highlight', '#FFF');
        document.body.style.setProperty('--color-hl-info', '#454545');
        document.body.style.setProperty('--color-border', '#FFF');
    } else {
        tema = 'light';
        localStorage.setItem('tema', 'light');
        btnTheme.src = "./assets/light-mode.svg";
        document.body.style.setProperty('--color-back', '#FFF');
        document.body.style.setProperty('--color-highlight', '#000');
        document.body.style.setProperty('--color-hl-info', '#FFF');
        document.body.style.setProperty('--color-border', '#979797');
    }
}

const getMovies = (buscar) => {
    const endPoint = buscar ? endPointSearch : endPointMovies;
    fetch(endPoint + buscar)
        .then(x => x.json())
        .then(x => movieArr = [...x.results])
        .then(x => mountMovies(movieArr, 0));
}

const mountMovies = (array, pagina) => {
    movies.textContent = '';
    if (!array.length) return;
    pagesTotal = Math.ceil(array.length / 5);
    let i = pagina * 5;
    let ate = i + 5;

    for (; i < ate; i++) {
        const movie = document.createElement('div');
        movie.id = array[i].id;
        movie.addEventListener('click', (e) => getModalMovie(e.target.id));
        movie.classList.add('movie');
        const movie__info = document.createElement('div');
        movie__info.classList.add('movie__info');
        const movie__title = document.createElement('span');
        movie__title.classList.add('movie__title');
        movie__title.textContent = array[i].original_title.trim().substr(0, 11);
        movie__title.textContent += array[i].original_title.length > 11 ? "..." : "";
        const movie__rating = document.createElement('span');
        movie__rating.classList.add('movie__rating');
        const img = document.createElement('img');
        img.alt = 'Estrela';
        img.src = './assets/estrela.svg';
        movie__rating.append(img);
        const score = document.createElement('span');
        score.textContent += `${array[i].vote_average}`.padEnd(3, ".0");
        movie__rating.append(score);
        movie.style.backgroundImage = `url(${array[i].poster_path})`;
        movie__info.append(movie__title);
        movie__info.append(movie__rating);
        movie.append(movie__info);
        movies.append(movie);
    }
}

const paginaAnterior = () => {
    pagesAtual = pagesAtual === 0 ? pagesTotal - 1 : --pagesAtual;
    mountMovies(movieArr, pagesAtual);
}
const proximaPagina = () => {
    pagesAtual = pagesAtual === pagesTotal - 1 ? 0 : ++pagesAtual;
    mountMovies(movieArr, pagesAtual);
}

const buscarFilmes = (e) => {
    if (e.code !== "Enter") return;
    pagesAtual = 0;
    getMovies(input.value);
    input.value = '';
}

const getFilmeDoDia = async () => {
    const resultMovie = await fetch(endPointDia);
    const resulMJson = await resultMovie.json();
    const resultVideo = await fetch(endPointDiaVideo);
    const resulVJson = await resultVideo.json();
    resulMJson.key = resulVJson.results[0]?.key
    mountFilmeDia(resulMJson);
}
const mountFilmeDia = (movie) => {
    document.querySelector('.highlight__video').style.backgroundImage = `url(${movie.backdrop_path})`;
    document.querySelector('.highlight__title').textContent = movie.title;
    document.querySelector('.highlight__rating').textContent = `${movie.vote_average}`.padEnd(3, ".0");
    const genres = movie.genres.map(x => x.name).join(', ');
    document.querySelector('.highlight__genres').textContent = genres;
    let rDate = new Date(movie.release_date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    rDate = new Intl.DateTimeFormat('pt-BR', options).format(rDate);
    document.querySelector('.highlight__launch').textContent = rDate;
    document.querySelector('.highlight__description').textContent = movie.overview;
    document.querySelector('.highlight__video-link').href = 'https://www.youtube.com/watch?v=' + movie.key;
}

const getModalMovie = async (movieId) => {
    modal.classList.remove('hidden');
    const resultMovie = await fetch(endPointModal + movieId + language);
    const resulMJson = await resultMovie.json();
    mountFilmeModal(resulMJson);
}

const mountFilmeModal = (movie) => {
    document.querySelector('.modal__img').src = movie.backdrop_path;
    document.querySelector('.modal__title').textContent = movie.title;
    document.querySelector('.modal__description').textContent = movie.overview;
    document.querySelector('.modal__average').textContent = `${movie.vote_average}`.padEnd(3, ".0");
    const genres = document.querySelector('.modal__genres');
    genres.textContent = '';
    movie.genres.forEach(g => {
        const span = document.createElement('span');
        span.className = 'modal__genre';
        span.textContent = g.name;
        genres.append(span);
    });
}

btnPrev.addEventListener('click', paginaAnterior);
btnNext.addEventListener('click', proximaPagina);
input.addEventListener('keyup', buscarFilmes);
modal.addEventListener('click', () => modal.classList.add('hidden'));
btnTheme.addEventListener('click', trocarTema)
window.onload = () => { getMovies(); getFilmeDoDia(); };