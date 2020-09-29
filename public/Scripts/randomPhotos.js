// API
const apiKey = '6gcDqXemVKPwkVDZS77iOB_qDK551zbZ3ewGDfZ7_HI';
const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;

// DOM MANIPULATION
const homeBtn = document.getElementById('homeBtn');
const anotherRandomImgBtn = document.getElementById('anotherRandomImgBtn');
const randomPhotoSlot = document.getElementById('randomPhotoSlot');

// EVENT LISTENERS
homeBtn.addEventListener('click', loadHomePage);
anotherRandomImgBtn.addEventListener('click', fetchRandomImg);

// FUNCTIONS
function fetchRandomImg(){
    fetch(url)
        .then(response => response.json())
        .then(json => displayRandomImg(json));
}

function displayRandomImg(json) {
    
    // console.log(json);

    while(randomPhotoSlot.firstChild){
        randomPhotoSlot.removeChild(randomPhotoSlot.firstChild);
    }

    let randomImage = document.createElement('img');
    randomImage.src = json.urls.thumb;
    // console.log(randomImage.src);
    randomImage.alt = json.alt_description;
    // console.log(randomImage.alt);

    randomPhotoSlot.appendChild(randomImage);

}

function loadHomePage(){
    window.location = '../index.html';
}