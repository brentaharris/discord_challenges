//for feather icons initial load
feather.replace()

//setting up YT player object
let player = null
async function onYouTubeIframeAPIReady() {
  player = await new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'uRFuKYBhnkY',
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      'playsinline': 1,
      'controls': 0,
      'origin': 'same',
      'iv_load_policy': 3,
      'widget_referrer': 'origin',
      'enablejsapi': 1,
      'modestbranding': 1
    },
    events: { }
  });
}

const playIcon = '<i data-feather="play"></i>'
const pauseIcon = '<i data-feather="pause"></i>'

const playBtn = document.getElementById("play-btn")
const stopBtn = document.getElementById("stop-btn")
const muteBtn = document.getElementById("mute-btn")

let muted = null
function onMuteBtnClicked() {
  if (!muted) {
    player.setVolume(0)
    muted = true
    muteBtn.innerText = 'Unmute'
  } else {
    player.setVolume(100)
    muted = false
    muteBtn.innerText = 'Mute'
  }
}


let playing = false;

const setPauseIcon = () => {
  playing = true
  playBtn.innerHTML = pauseIcon
  feather.replace()
}

const setPlayIcon = () => {
  playing = false
  playBtn.innerHTML = playIcon
  feather.replace()
}

function callPlay() {
    player.playVideo()
    setPauseIcon()
}

function callPause() {
    player.pauseVideo()
    setPlayIcon()
}

const onStopBtnClicked = () => {
  player.stopVideo();
  setPlayIcon()
}

const onPlayBtnClicked = () => {
  playing ? callPause() : callPlay()
}
