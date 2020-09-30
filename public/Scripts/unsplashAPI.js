// API
const apiKey = '6gcDqXemVKPwkVDZS77iOB_qDK551zbZ3ewGDfZ7_HI';
const baseURL = 'https://api.unsplash.com/';
const key = `?client_id=${apiKey}`;
let url;

// DOM MANIPULATION
let searchTermInput = document.getElementById('searchTerm');
const searchSubmitBtn = document.getElementById('searchSubmitBtn');
const searchResultsRow = document.getElementById('searchResults');
const searchPagination = document.getElementById('searchPagination');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const randomImageBtn = document.getElementById('randomImageBtn');

searchPagination.style.display = 'none'; // Hiding the search pagination buttons (no search results to display yet)

// EVENT LISTENERS
searchSubmitBtn.addEventListener('click', fetchSearchImages);
randomImageBtn.addEventListener('click', loadRandomImgPage);
prevPageBtn.addEventListener('click', fetchPrevPageResults);
nextPageBtn.addEventListener('click', fetchNextPageResults);


// HELPER FUNCTIONS

// CONSTANTS
let previousRandomPhotos = new Array();
let pageNumber = 1;

// FUNCTIONS
function fetchSearchImages() {
    // console.log('Search submit button pressed');
    let searchTerm = searchTermInput.value;
    console.log(searchTerm);
    url = `${baseURL}/search/photos${key}&page=${pageNumber}&query=${searchTerm}`;
    console.log(url);
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json => displaySearchResults(json));

}

function loadRandomImgPage(){
    window.location = '../public/Pages/randomPhotos.html'; // Sends to other html page
}

function displaySearchResults(json){

    while(searchResultsRow.firstChild){
        searchResultsRow.removeChild(searchResultsRow.firstChild);
    }

    for(searchResult of json.results){
        let img = document.createElement('img');
        img.src = searchResult.urls.thumb;

        searchResultsRow.appendChild(img);
    }
    // console.log(json);

    let pics = json.total;
    // console.log(pics);
    if(pics > 10){
        searchPagination.style.display = 'inline';
        if(pageNumber == 1){
            prevPageBtn.style.display = 'none';
        }
        else if(pageNumber == json.total_pages){
            nextPageBtn.style.display = 'none';
        }
        else{
            prevPageBtn.style.display = 'inline';
            nextPageBtn.style.display = 'inline';
        }
    }
}

function fetchPrevPageResults(){
    pageNumber--;
    fetchSearchImages();
}

function fetchNextPageResults(){
    pageNumber++;
    fetchSearchImages();
}