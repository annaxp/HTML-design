`use strict`

console.log("test")

let images =[
    "./img/jpg/portfolio1.jpg",
    "./img/jpg/portfolio2.jpg",
    "./img/jpg/portfolio3.jpg",
    "./img/jpg/portfolio4.jpg",
    "./img/jpg/portfolio5.jpg",
];


let num = 0;

function next() {
    let slider = document.getElementById("slider");
    num++;
    if (num >= images.length){
        num = 0;
    }
        slider.src = images[num];
}

function prev() {
    let slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}