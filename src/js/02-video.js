import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const CURRENT_TIME_KEY = "videoplayer-current-time";
const iFrameEl = document.querySelector('#vimeo-player');

const vimeoPlayer = new Player(iFrameEl);

vimeoPlayer.on('timeupdate', throttle(onTimeUpdate, 1000));

if(localStorage.getItem(CURRENT_TIME_KEY)) {
  vimeoPlayer.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
} else {
  vimeoPlayer.setCurrentTime(0);
}

function onTimeUpdate(event){
  localStorage.setItem(CURRENT_TIME_KEY, event.seconds);
}
