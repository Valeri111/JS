// 1

const input = document.getElementById('input');
const button = document.getElementById('button');

button.onclick = function() {
    input.value += ' ->в onclick ';

    setTimeout(function() {
        input.focus(); // сработает после onclick
    }, 2000);

    input.value += ' из onclick-> ';
};

input.onclick = function() {
    console.log(event.type);
};

input.onfocus = function() {
    input.value += ' !focus! ';
    console.log(event.type);
};


//2

const pic = document.getElementById('pic');
const btn = document.getElementById('btn');

let numPic = 1;
let p;
btn.addEventListener("click", () =>{
    let promise = new Promise(function(resolve, reject){
        let value = Number(prompt("Введите интервал:"));
        if (value > 0){
            clearInterval(p);
             p = setInterval(() => {changePicture(value)}, value);
            resolve(p);
        }
        else{
            reject(new Error("Значение должно быть больше нуля"));
        }
    });
    return promise;
})

function changePicture(){
    if (numPic == 6){
        numPic = 1;
    }
    pic.src = "./pictures/pic"+numPic+".jpg";
    numPic++;
}