// JavaScript Document

const videoPart1 = [
    { src: "videos/clip01.mp4",     captions: "This is the right book" },
    { src: "videos/clip02.mp4",     captions: "Th█s █sn't th█ r█ght █ne..█" },
    { src: "videos/clip03.mp4",     captions: "Upon examination, it seems like the right book" },
    { src: "videos/clip04.mp4",     captions: "Upon examination, it seems like the right book" },
    { src: "videos/clip05.mp4",     captions: "Th█s █sn't th█ r█ght █ne..█" }
];

const videoPart2 = [
    { src: "videos/clip06.mp4",     captions: "Studying has never felt so simple" },
    { src: "videos/clip07.mp4",     captions: "Studying has never felt so ominous" },
    { src: "videos/clip08.mp4",     captions: "This feeling of scopaesthesia... " },
    { src: "videos/clip09.mp4",     captions: "Studying has never felt so intense" },
    { src: "videos/clip10.mp4",     captions: "Studying has never felt so ominous" }
];

const videoPart3 = [
    { src: "videos/clip11.mp4",     captions: "Studying was alright, now time to head home" },
    { src: "videos/clip12.mp4",     captions: "The undoing of the self" },
    { src: "videos/clip13.mp4",     captions: "SAV█ █T SAV█ T█E B██K Y█U MU█T" },
    { src: "videos/clip14.mp4",     captions: "How to make ████████, disappear" },
    { src: "videos/clip15.mp4",     captions: "It was only a 6/25 chance" }
];

const titleOverlay = document.getElementById("titleOverlay")
const player = document.getElementById("player");
const titleText = document.getElementById("titleText");
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log("Random word:", array[randomIndex]);
    return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0

function buildVideo() {
    titleOverlay.classList.add("playing");
    player.classList.add("fullscreen");
    replayBtn.style.display = "none";

        player.muted = true;

        playlist = [
        picker(videoPart1),
        picker(videoPart2),
        picker(videoPart3)
    ];

    currentIndex = 0;
    playCurrent ();
}

function playCurrent() {
    const current = playlist[currentIndex]; // { src: "...", captions: "..." }
    titleText.textContent = current.captions;

    player.src = current.src;
    player.load();
    player.play().catch(err => {
        console.warn("Play interrupted (autoplay policy?):", err);
    });
}

// Advance when a video ends
player.addEventListener("ended", () => {
    currentIndex++;
    if (currentIndex < playlist.length) {
        playCurrent();
    } else {
        console.log("All three parts finished.");
        replayBtn.style.display = "block";
    }
});
