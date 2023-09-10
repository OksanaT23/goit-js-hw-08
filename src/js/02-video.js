import Player from "@vimeo/player";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storageKey = 'videoplayer-current-time';
const currentTime = localStorage.getItem(storageKey);

player.on('timeupdate', function (data) {
    console.log(data);
    localStorage.setItem(storageKey, data.seconds);
});

if (currentTime) {
    player.setCurrentTime(currentTime);
}
