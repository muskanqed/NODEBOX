let array = [];

function addToArray() {
    let value = document.getElementById('inputValue').value;
    if (value !== '') {
        array.push(parseInt(value));
        document.getElementById('inputValue').value = ''; // Clear the input field
    }
}

function displayEvenOddArrays() {
    let evenArray = [];
    let oddArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }

    document.getElementById('evenArray').innerText = evenArray.join(', ');
    document.getElementById('oddArray').innerText = oddArray.join(', ');
}
