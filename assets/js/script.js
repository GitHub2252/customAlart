'use strict';


const input = document.querySelector('input');
const button = document.querySelector('button');
const alartBox = document.querySelector('.alart-box');
const dangerAlart = document.querySelector('.danger-alart');
const closeIcon = document.querySelector('.close-icon');
const tryElement = document.querySelector('.try');


// alart sound and play sound
let alart = new Audio('assets/alartSound/alart.mp3');

let player = function() {
    alart.play();
}





// alart function
let myAlart = function() {
    alartBox.style.display = 'block';
    tryElement.style.display = 'none';
    let stop = setInterval(player, 50);
    closeIcon.addEventListener('click', () => {
        alartBox.style.display = 'none';
        tryElement.style.display = 'block';
        clearInterval(stop);
    })
}


// this is for color changing of 'Access Denied' text
let dipdip = function() {
    dangerAlart.style.color = '#fff';
}
let dipdipdip = function() {
    dangerAlart.style.color = '#f00';
}


// this is button click event
button.addEventListener('click', () => {
    
    let inputValue = input.value;
    if((inputValue <= 0) || (inputValue = '')) {
        myAlart();
        setInterval(dipdip, 150);
        setInterval(dipdipdip, 200);
    }

    input.value = '';

})

