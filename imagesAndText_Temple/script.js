// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (10 images)
const slides = [
    {   src: 'images/image01.jpg',
        alt: 'person taking shape',
        caption: 'A formation of idea'
    },
    {   src: 'images/image02.jpg',
        alt: 'hands tugging at circle',
        caption: 'At first, a play of intention'
    },
    {   src: 'images/image03.jpg',
        alt: 'hands in red glow',
        caption: 'Adversity bearing its fangs in the form of an oppressive storm; fear, loathing'
    },
    {   src: 'images/image04.jpg',
        alt: 'hands holding ball',
        caption: 'The dreamer clasps their goal, decisions many but all in their control'
    },
    {   src: 'images/image05.jpg',
        alt: 'hands in green glow',
        caption: 'Support, felt or not, becomes an unwavering force against despair'
    },
    {   src: 'images/image06.jpg',
        alt: 'person climbing spiked chain',
        caption: 'It takes effort to push through the journey'
    },
    {   src: 'images/image07.jpg',
        alt: 'person climbing out of hole',
        caption: 'Finishing is only truly half'
    },
    {   src: 'images/image08.jpg',
        alt: 'hands surrounded by vines,',
        caption: 'It is up to to the dreamer where the lessons weigh between remembering what it was, and what it could be'
    },
    {   src: 'images/image09.jpg',
        alt: 'person with rainbow eye',
        caption: 'When prerequisites are let go, and the dreamer becomes their own reason'
    },
    {   src: 'images/image10.jpg',
        alt: 'starry sky',
        caption: 'A universe opens itself to them'
    }
];

let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
    const i = new Image();
    i.src = src;
});

// Helper to show slide
function showSlide(index) {
    const slide = slides[index];
    mainImage.src = slide.src; // replaces the image
    mainImage.alt = slide.alt; // replaces the alt of the image
    caption.textContent = slide.caption; // updates caption text
}

// Advance on click
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);