function initSite() {
    var bird = document.getElementById("myxa");
    var positionX = 0;
    var positionY = 250;
    var body = document.getElementById("body");
    var birdWidth = bird.clientWidth;
    
    setInterval(stepAnimation, 2);

    function stepAnimation() {

        var bodyWidth = body.clientWidth;
        var bodyHeight = body.clientHeight;

        var direction = Math.floor(Math.random() * 3);

        if (direction == 0) {

            // Go up

            if (positionY <= 0 - bodyHeight){
                positionY = bodyHeight;
            } else {
                positionY--;
            }

            bird.style.top = positionY + 'px';

        } else if (direction == 1) {

            // Go right

            if (positionX >= bodyWidth){
                positionX = 0 - birdWidth;
            } else {
                positionX++;
            }

            bird.style.left = positionX + 'px';

            
        } else {

            // Go down

            if (positionY >= bodyHeight){
                positionY = 0 - bodyHeight;
            } else {
                positionY++;
            }

            bird.style.top = positionY + 'px';
        }
    }
}