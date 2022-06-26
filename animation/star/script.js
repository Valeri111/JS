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

function random(min, max) {
	
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    
    return rand;
    
}

for (var i=0; i<200; i++) {

    document.getElementsByTagName('body')[0].innerHTML += '<span class="rain" style="left: '+random(-1000, 1000)+'px;transform: translate3d(0, 0, 0);animation-delay: '+(0.01 * i)+'s"></span>';

}