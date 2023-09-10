import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storageKey = 'videoplayer-current-time';
const currentTime = localStorage.getItem(storageKey);

const vimeoTimeUpdateCallback = function (data) {
    console.log(data);
    localStorage.setItem(storageKey, data.seconds);
};

player.on('timeupdate', throttle(vimeoTimeUpdateCallback, 1000, {leading: true, trailing: false}));

if (currentTime) {
    player.setCurrentTime(currentTime);
}
