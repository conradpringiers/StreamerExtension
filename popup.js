const userId = YOUR USER ID;
const clientId = 'YOUR CLIENT ID' // create an application at dev.twitch.tv (url redirect to localhost)
const token = 'YOUR TOKEN'; // find your token with references.

const url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
const twithUrl = "https://twitch.tv/yoururl"; // Stands for your URL
const headers = {
    'Authorization' : `Bearer ${token}`,
    'Client-ID' : clientId
}

let isLiveOn = false;

const cb = function (json) {
    if (json.data.length && !isLiveOn) {
        setIcon('images/ON.png');
        chrome.notifications.create('LiveOn', { // Import 32x32 picture to show at the extension icon.
            title: '🔥 alzhetv lance son stream !', // Edit this
            iconUrl: 'images/ON.png', // Import 32x32 picture to show when notification is sent.
            message: 'Salut mec, je te veux dans mon équipe...ah non, dans mon chat, oui !', // edit this too
            type: 'basic' // don't edit
        });
        isLiveOn = true;
    } else {
        setIcon('images/OFF.png'); // Import 32x32 picture to show at the extension icon.
        isLiveOn = false;
    }
}

function fetchTwitchAPI(url, headers, cb) {
    fetch (url, {
        headers: headers
    }).then ((response) => {
        return response.json();
    }).then ((json) => cb(json));
}

function setIcon(path) {
    chrome.action.setIcon({ path: path});
}

fetchTwitchAPI(url, headers, cb);

chrome.notifications.onClicked.addListener(() => {
    chrome.tabs.create({
        url: twithUrl
    })
});

chrome.alarms.create({ periodInMinutes: 1});
chrome.alarms.onAlarm.addListener(() => {
    fetchTwitchAPI(url, headers, cb);
})