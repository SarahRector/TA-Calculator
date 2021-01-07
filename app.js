// import functions and grab DOM elements
const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

const subtractionField = document.getElementById('subtract-input-1');
const subtractionField2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractResults = document.getElementById('subtract-results');

// initialize state

// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;

    const sum = fieldValue + fieldValue2;

    addResults.textContent = sum;
});

subtractButton.addEventListener('click', () => {
    const fieldValue = subtractionField.valueAsNumber;
    const fieldValue2 = subtractionField2.valueAsNumber;

    const diff = fieldValue - fieldValue2;

    subtractResults.textContent = diff;
});
