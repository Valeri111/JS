const imgLinks = [
    './img/moon-2.png',
    './img/moon-3.png',
    './img/moon-4.png',
    './img/moon-5.png',
    './img/moon-6.png',
    './img/moon-7.png',
    './img/moon-8.png',
    './img/moon-9.png',
    './img/moon-1.png'
];

const delay = 500000;
let currentIndex = 0;
setInterval(function() {
    document.getElementById('image').src = imgLinks[currentIndex];
    currentIndex++;
    if(currentIndex >= imgLinks.length) {
        currentIndex = 0;
    }
}, delay);