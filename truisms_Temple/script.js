// Select the video element and the text box
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Array of video sources for toggling
const videoSources = ["videos/video01.mp4",
    "videos/video02.mp4",
    "videos/video03.mp4",
    "videos/video04.mp4",
    "videos/video05.mp4"];

// Current video index, starting with the first video
let currentVideoIndex = 0;

// Array to store the playback time for each video
const videoTimes = [0, 0, 0, 0, 0];

var isSoundEnabled = false;

function getRandomIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * videoSources.length);
    } while (newIndex === currentVideoIndex);
    return newIndex;
}

function toggleVideo() {
    if (isSoundEnabled === false) {
        videoPlayer.muted = true;
        isSoundEnabled = true;
    }

    videoTimes[currentVideoIndex] = videoPlayer.currentTime;
    currentVideoIndex = getRandomIndex();

    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.currentTime = videoTimes[currentVideoIndex];
    videoPlayer.play();
}

// Add a click event to the text box to switch videos
textBox.addEventListener("click", toggleVideo);

// Add a click event to the textbox to change position
textBox.addEventListener('click', function() {
    const spaceWidth = Math.max(0, window.innerWidth - textBox.offsetWidth);
    const viewportHeight = window.innerHeight;
    const boxHeight = textBox.offsetHeight;

    // Restrict vertical range to the bottom one-third pf the viewport
    const minY = Math.ceil(viewportHeight * 2/3);
    const maxY = Math.max(minY, viewportHeight - boxHeight);

    const randomX = Math.floor(Math.random() * spaceWidth);
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    textBox.style.left = randomX + 'px';
    textBox.style.top = randomY + 'px';
})