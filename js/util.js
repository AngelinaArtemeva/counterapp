const ACTIVITIES = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
}

const counterResult = document.querySelector('.counter__result')
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const age = document.querySelector('#age');
const maintenanceContainer = document.querySelector('#calories-norm');
const gainingContainer = document.querySelector('#calories-maximal');
const lossContainer = document.querySelector('#calories-minimal');

const getActivity = () => {
    const activityValue = document.querySelector('[name="activity"]:checked').value;
    return ACTIVITIES[activityValue];
}

function countMaleNorm () {
    return ((10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5)
};

function countFemaleNorm () {
    return ((10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161)
};

const countNorm = () => {
    const maleCalculation = document.querySelector('#gender-male');
    if (maleCalculation.checked) {
        return countMaleNorm();
    }
    return countFemaleNorm();
}
 
function countResults() {
    counterResult.classList.remove('counter__result--hidden');
    maintenanceContainer.textContent = Math.round(countNorm(age.value, height.value, weight.value) * getActivity());
    gainingContainer.textContent = Math.round(1.15 * (countNorm(age.value, height.value, weight.value) * getActivity()));
    lossContainer.textContent = Math.round(0.85 * (countNorm(age.value, height.value, weight.value) * getActivity()));
}

export {countResults}