import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'video-player-current-time-local';

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

const saveTimeThrottled = throttle(currentTime => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime));
}, 1000);

player.on('timepdate', function (data) {
    saveTimeThrottled(data.seconds);
});
