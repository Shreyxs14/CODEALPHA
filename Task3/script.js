const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const songTitle = document.getElementById("song-title");
const artist = document.getElementById("artist");
const albumArt = document.getElementById("album-art");

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
  {
    title: "Husn",
    artist: "Anuv Jain",
    src: "songs/Husn.mp3",
    img: "songs/husn.jpeg"
  },
  {
    title: "Jo Tum Mere Ho",
    artist: "Anuv Jain",
    src: "songs/Heran hu.mp3",
    img: "songs/cover.jpeg"
  },
  {
    title: "Gul",
    artist: "Anuv Jain",
    src: "songs/Gul.mp3",
    img: "songs/gul.jpeg"
  }
];

function loadSong(song) {
  audioPlayer.src = song.src;
  songTitle.innerText = song.title;
  artist.innerText = song.artist;
  albumArt.src = song.img;
}

function playSong() {
  audioPlayer.play();
  playBtn.innerText = "⏸️";
  isPlaying = true;
}

function pauseSong() {
  audioPlayer.pause();
  playBtn.innerText = "▶️";
  isPlaying = false;
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
  loadSong(songs[currentSongIndex]);
  if (isPlaying) playSong();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
  loadSong(songs[currentSongIndex]);
  if (isPlaying) playSong();
});

// Load the first song initially
loadSong(songs[currentSongIndex]);
