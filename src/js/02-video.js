import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const CURRENT_TIME_KEY = "videoplayer-current-time";
const iFrameEl = document.querySelector('#vimeo-player');

const vimeoPlayer = new Player(iFrameEl);

vimeoPlayer.on('timeupdate', throttle(onTimeUpdate, 1000));
vimeoPlayer.on('play', onPlay);

function onTimeUpdate(event){
  // console.log('timeupdate', event.seconds);
  localStorage.setItem(CURRENT_TIME_KEY, event.seconds);
}

function onPlay() {
  vimeoPlayer.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
}