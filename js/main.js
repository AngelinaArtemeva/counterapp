import { countResults } from './util.js';

const counterResult = document.querySelector('.counter__result');
const inputElements = document.querySelectorAll('.input__wrapper');
const resetButton = document.querySelector('.form__reset-button');
const submitButton = document.querySelector('.form__submit-button');
const Age = document.querySelector('#age');
const Height = document.querySelector('#height');
const Weight = document.querySelector('#weight');
const maleCalculation = document.querySelector('#gender-male');
const activityMinimal = document.querySelector('#activity-minimal');

inputElements.forEach(function(elem) {
    elem.addEventListener('input', function() {
        if (Age.value > 0 || Height.value > 0 || Weight.value > 0) {
            resetButton.disabled = false;
        } else {
            resetButton.disabled = true;
        }
        if (Age.value > 0 && Height.value > 0 && Weight.value > 0) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    countResults();
});

resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    Age.value = "";
    Height.value = "";
    Weight.value = "";
    maleCalculation.checked = true;
    activityMinimal.checked = true;
    counterResult.classList.add('counter__result--hidden');
    resetButton.disabled = true;
    submitButton.disabled = true;
});
