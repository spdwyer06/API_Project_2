// API
const apiKey = '6gcDqXemVKPwkVDZS77iOB_qDK551zbZ3ewGDfZ7_HI';
const baseURL = 'https://api.unsplash.com/';
const key = `?client_id=${apiKey}`;
let url;

// DOM MANIPULATION
let searchTermInput = document.getElementById('searchTerm');
const searchSubmitBtn = document.getElementById('searchSubmitBtn');
const searchResultsRow = document.getElementById('searchResults');
const randomResultsRow = document.getElementById('randomResults');
const randomImageBtn = document.getElementById('randomImageBtn');
const previousPhotos = document.getElementById('previousPhotos');
const randomPhotoCollectionBtn = document.getElementById('randomPhotoCollectionBtn');

// EVENT LISTENERS
searchSubmitBtn.addEventListener('click', fetchSearchImages);
randomImageBtn.addEventListener('click', fetchRandomImage);
randomPhotoCollectionBtn.addEventListener('click', displayPreviouslyViewedRandomPhotos);

// HELPER FUNCTIONS

// CONSTANTS
let previousRandomPhotos = new Array();



// FUNCTIONS
function fetchSearchImages() {
    // console.log('Search submit button pressed');
    let searchTerm = searchTermInput.value;
    console.log(searchTerm);
    url = `${baseURL}/search/photos${key}&query=${searchTerm}`;
    console.log(url);
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json => displaySearchResults(json));

}

function fetchRandomImage(){
    // console.log('Random image button pressed');    
    url = baseURL + '/photos/random' + key;
    // console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(json => displayRandomResult(json));
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
    console.log(json);
}

function displayRandomResult(json) {

    console.clear();

    while(randomResultsRow.firstChild){
        randomResultsRow.removeChild(randomResultsRow.firstChild);
    }

    let randomImage = document.createElement('img');
    randomImage.src = json.urls.thumb;
    console.log(randomImage.src);
    randomImage.alt = json.alt_description;
    // console.log(randomImage.alt);
    // randomImage.style = 'width: 400px; height: 400px;'

    previousRandomPhotos.push(randomImage.src);

    randomResultsRow.appendChild(randomImage);

    console.log(json);
}

function displayPreviouslyViewedRandomPhotos(){

    while(previousPhotos.firstChild){
        previousPhotos.removeChild(previousPhotos.firstChild);
    }

    for(imgURL of previousRandomPhotos){
        let img = document.createElement('img');
        img.src = imgURL;

        previousPhotos.appendChild(img);
    }
}