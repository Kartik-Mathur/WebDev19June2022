const BASE_URL = 'https://api.tvmaze.com/search/shows?q=';
const form = document.querySelector('form');
const movieContainer = document.querySelector('#movieContainer');

function getMovies(movie){
    const URL = BASE_URL + movie;
    console.log(URL);
    axios.get(URL)
    .then((res)=>{
        const movieList = res.data;
        for(let movie of movieList){
            let movieURL = movie.show.image.medium;
            if(movieURL != null){
                console.log(movieURL);
                let img = document.createElement('img');
                img.setAttribute('src',movieURL);
                movieContainer.appendChild(img);
            }
        }
        console.log(res);
    })
}

function removeMovies(parent){
    while(parent.firstChild){
        parent.firstChild.remove();
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(e.target.children[0].value);

    const movie = e.target.children[0].value;
    removeMovies(movieContainer);
    getMovies(movie);
})
