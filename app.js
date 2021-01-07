// import functions and grab DOM elements
const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

// initialize state

// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;

    const sum = fieldValue + fieldValue2;

    addResults.textContent = sum;
});
