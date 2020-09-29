// API
const key = '9d9c837d26e4e1f7267418f9422c118f';
const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://api.igdb.com/v4/';
let url;

// DOM MANIPULATION
let vgPlatformDropdown = document.getElementById('vgPlatforms');
const vgPlatformSubmitBtn = document.getElementById('vgPlatformSubmitBtn');

// EVENT LISTENERS
vgPlatformSubmitBtn.addEventListener('click', function () {
    console.log('Submit btn clicked');
    let selectedPlatform = vgPlatformDropdown.value;
    console.log(selectedPlatform);
    fetchPlatformGames(selectedPlatform);
});

// HELPER FUNCTIONS


// FUNCTIONS
function fetchPlatformGames(vgPlatform) {
    console.log(vgPlatform);
    // let x = 'https://api-v3.igdb.com/companies/?search=nintendo&fields=name';
    // let x = 'https://api-v3.igdb.com/release_dates/';
    // let x = 'https://api-v3.igdb.com/games/?fields=name';
    url = 'https://api.igdb.com/v4/platforms/';
    // url = proxyURL + x;
    let data = { id: 130 };
    console.log(url);

    fetch(url, {
        method: 'POST',
        headers: {
            "user-key": key
        },
        body: JSON.stringify({
            "id": 130,
            "fields": "*"
            // "name": "Nintendo Switch"
        })
    })
        .then(response => response.json())
        .then(json => displayResults(json));
}

function displayResults(json) {
    console.log(json);
}
