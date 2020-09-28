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
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const randomImageBtn = document.getElementById('randomImageBtn');
// const randomResultsRow = document.getElementById('randomResults');
// const previousPhotos = document.getElementById('previousPhotos');
// const randomPhotoCollectionBtn = document.getElementById('randomPhotoCollectionBtn');

searchPagination.style.display = 'none';

// EVENT LISTENERS
searchSubmitBtn.addEventListener('click', fetchSearchImages);
randomImageBtn.addEventListener('click', loadRandomImgPage);
// randomPhotoCollectionBtn.addEventListener('click', displayPreviouslyViewedRandomPhotos);

// HELPER FUNCTIONS

// CONSTANTS
let previousRandomPhotos = new Array();
let pageNumber = 1;

// FUNCTIONS
function fetchSearchImages() {
    // console.log('Search submit button pressed');
    let searchTerm = searchTermInput.value;
    console.log(searchTerm);
    // url = `${baseURL}/search/photos${key}&query=${searchTerm}`;
    url = `${baseURL}/search/photos${key}&page=${pageNumber}&query=${searchTerm}`;
    console.log(url);
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json => displaySearchResults(json));

}

function loadRandomImgPage(){
    window.location = '../API_Project2/Pages/randomPhotos.html'; // Sends to other html page
}

// function fetchRandomImage(){
//     // console.log('Random image button pressed');    
//     url = baseURL + '/photos/random' + key;
//     // console.log(url);

//     fetch(url)
//         .then(response => response.json())
//         .then(json => displayRandomResult(json));
// }

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

// function displayRandomResult(json) {

//     console.clear();

//     while(randomResultsRow.firstChild){
//         randomResultsRow.removeChild(randomResultsRow.firstChild);
//     }

//     let randomImage = document.createElement('img');
//     randomImage.src = json.urls.thumb;
//     console.log(randomImage.src);
//     randomImage.alt = json.alt_description;
//     // console.log(randomImage.alt);
//     // randomImage.style = 'width: 400px; height: 400px;'

//     previousRandomPhotos.push(randomImage.src);

//     randomResultsRow.appendChild(randomImage);

//     console.log(json);
// }

function displayPreviouslyViewedRandomPhotos(){

    window.location = 'test.html'; // Sends to other html page

    // while(previousPhotos.firstChild){
    //     previousPhotos.removeChild(previousPhotos.firstChild);
    // }

    // for(imgURL of previousRandomPhotos){
    //     let img = document.createElement('img');
    //     img.src = imgURL;

    //     previousPhotos.appendChild(img);
    // }
}