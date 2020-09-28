// API
// const baseURL = 'https://api.rawg.io/api/platforms/';
const baseURL = 'https://api.rawg.io/api/games';
let url;

// DOM MANIPULATION
let vgPlatformDropdown = document.getElementById('vgPlatforms');
const vgPlatformSubmitBtn = document.getElementById('vgPlatformSubmitBtn');

// EVENT LISTENERS
vgPlatformSubmitBtn.addEventListener('click', function () {
    console.log('Submit btn clicked');
    let selectedPlatform = vgPlatformDropdown.value;
    // console.log(selectedPlatform);
    fetchPlatformGames(selectedPlatform);
});

// HELPER FUNCTIONS


// FUNCTIONS
function fetchPlatformGames(vgPlatform) {
    console.log(vgPlatform);
    // url = baseURL + vgPlatform;
    // let game = '3328';
    // url = baseURL + game;
    url = baseURL; 
    console.log(url);

    fetch(url, {
        body: JSON.stringify({
            "game.platform.id": vgPlatform
        })
    })
        .then(response => response.json())
        .then(json => displayResults(json));
}

function displayResults(json) {
    console.log(json);
    for(game of json.results){
        for(platform of game.platforms){
            if(platform.platform.id == vgPlatformDropdown.value){
                // console.log('MATCH');
                console.log(game.name);
            }
            console.log(platform.platform.id);
        }
    }
}