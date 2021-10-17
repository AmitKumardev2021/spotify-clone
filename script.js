console.log("Welocme to Spotify-made by Amit");
// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songsitem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "let me love you",
    pathName: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "amit me love you",
    pathName: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "let me love you",
    pathName: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "let me love you",
    pathName: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "let me love you",
    pathName: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "let me love you",
    pathName: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "let me love you",
    pathName: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "let me love you",
    pathName: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "amit love you",
    pathName: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
];

songsitem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songss")[0].innerText = songs[i].songName;
});

// audioElement.play();
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});
// progressbar area
audioElement.addEventListener("timeupdate", () => {
  // seekbar
  progress = parseFloat(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndix = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
