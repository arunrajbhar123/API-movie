const info = JSON.parse(localStorage.getItem('TMDBmovie'));
const CAST_ID = info.id;
const CAST_FIND = `https://api.themoviedb.org/3/movie/${CAST_ID}?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US`;
const extra = 'https://image.tmdb.org/t/p/w500/';
// const VIDEO_ID = info.imdb_id;
// const VIDEO_URL = `https://api.themoviedb.org/3/movie/${VIDEO_ID}/videos?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US`
// const VIDEO_URL = `https://api.themoviedb.org/3/movie/tt1228705/videos?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US`;
// console.log(VIDEO_ID)

//appeding here


let img = document.createElement('img');
let containername = document.createElement('div');
containername.setAttribute('class', 'namingpart');
let title = document.createElement('h1');
let img2 = document.createElement('img');
let shareicon = document.createElement('i')
shareicon.setAttribute('class', 'fa-solid fa-share-nodes');
let overview = document.createElement('h3');
overview.innerText = info.overview;
img.src = extra + info.backdrop_path;
img2.src = extra + info.poster_path;
title.innerText = info.original_title;
containername.append(title, img2, overview, shareicon)
document.querySelector('.daya').append(img, containername);
// backdrop_path


// casting
fetch(CAST_FIND).then(function(res) {
    return res.json();
}).then(function(res) {
    // console.log(res)
});


//videos
// fetch(VIDEO_URL).then(function(res) {
//     return res.json();
// }).then(function(res) {
//     console.log(res)
// }).catch(function(err) {
//     console.log(err)
// })

// 

// var shareBtn = document.querySelector(".share-button");


var popclick = document.createElement("p");
// const button = document.querySelector('button')
shareicon.onclick = () => {
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
        popclick.innerText = 'copied';

        shareicon.append(popclick);
    }, 100);
    setTimeout(() => {
            popclick.style.display = 'none';
        }, 500)
        // window.location.reload();
}