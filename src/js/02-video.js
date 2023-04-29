import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoCurrentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(videoCurrentTime || '0');


player.on('timeupdate', _throttle((e) => {
    localStorage.setItem('videoplayer-current-time', e.seconds)
}, 1000)
);



