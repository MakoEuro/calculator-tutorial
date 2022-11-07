'use strict';

// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

// Select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector); 
}

const form = select('form');
const numberOne = select('.number-one');
const numberTwo = select('.number-two');
const btn = select('.get-result');
const output = select('.output p');

function isNumber(str) {
    let input = str.trim();
    
    if (input.length > 0 && !isNaN(input))
        return true;
    
    return false;
}

let count = 0;

// Adding an event listener
onEvent('click', btn, function() {
    let a = numberOne.value.trim();
    let b = numberOne.value.trim();

    if (isNumber(a) && isNumber(b)) {
        let result = parseFloat(a) + parseFloat(b);
        output.innerText = `${parseFloat(a)} + ${parseFloat(b)} = ${result}`
        count = 0;
    } else {
        if (count > 3){
            output.innerText = 'Fun fact: letters are not numbers';
        } else {
            output.innerText = 'Please enter valid numbers';
        }
    }   
});