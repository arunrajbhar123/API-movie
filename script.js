// const url = `https:api.themoviedb.org/3/movie/upcoming?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&`;


const API_KEY = 'api_key=763aad1b51ae4ed320afd3680c31c2fe';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?popularity&' + API_KEY;
// https://api.themoviedb.org/3/movie/popular?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1
// https://api.themoviedb.org/3/search/movie?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1&include_adult=false&query=ironman
const SearchURL = BASE_URL + '/search/movie?' + API_KEY;
const extra = 'https://image.tmdb.org/t/p/w500/';

ApiUrl(API_URL)
var error = document.querySelector(".error");
error.setAttribute('class', 'terrror')
let imgerro = document.createElement('img');


function ApiUrl(url) {

    fetch(url).then(function(res) {
        return (res.json());
    }).then(function(res) {
        ironman((res.results));

        Nextage(res.total_pages)
        if (res.total_pages === 0) {
            imgerro.src = 'https://m.filmfare.com/static/img/filmfare_pwa_404_page.jpg'
            error.append(imgerro)
        } else {
            error.innerHTML = null
        }

    }).catch(function(err) {
        console.log(err)
    });
}
var appendMovies = document.querySelector("#ironman");

function ironman(data) {
    appendMovies.innerHTML = null;
    PageName.innerHTML = null
    data.map(function(el, i) {

        let box = document.createElement('div');
        let img = document.createElement('img');
        var name = document.createElement('div');
        var rate = document.createElement('p');
        name.setAttribute('class', "namepart");
        img.src = `${extra+el.poster_path}`;
        let title = document.createElement('p');
        title.innerHTML = el.original_title;
        let time = document.createElement('p');
        time.innerHTML = `Release: ${el.release_date}`;
        rate.innerText = el.vote_average;
        let btnrec = document.createElement('p');
        btnrec.innerText = "Recommended";
        if (rate.innerText > 8.5) {
            title.append(btnrec)
        }
        var ratestar = document.createElement('i');
        ratestar.setAttribute('class', 'fa-solid fa-star');
        rate.append(ratestar)
        name.append(title, rate);
        box.append(img, name);
        appendMovies.append(box);
        box.addEventListener('click', function() {
            localStorage.setItem('TMDBmovie', JSON.stringify(el));
            window.location.href = "pageview.html";

            // total_pages


        });

    });
}

function findmovies() {
    const searchTerm = document.querySelector("#searchmovi").value;
    if (searchTerm) {
        ApiUrl(SearchURL + '&query=' + searchTerm);
        // console.log(SearchURL + '&query' + searchTerm)

    } else {
        ApiUrl(API_URL);
    }
}

var PageName = document.querySelector(".pages");
var showpage = 'Page';
var showNext = 'Next';

var p1;

function Nextage(page) {
    PageName.append(showpage);
    for (var i = 1; i < page; i++) {
        if (i < 5) {
            p1 = document.createElement('p');
            p1.innerHTML = i;
            PageName.append(p1)
        }
    }
    PageName.append(showNext)
}

// https://api.themoviedb.org/3/search/movie?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1&include_adult=false&query=ironman
// https://api.themoviedb.org/3/search/movie?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1&include_adult=false&query=ironman