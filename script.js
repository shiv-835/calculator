function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    let display = document.getElementById('display');
    display.value += character;
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (e) {
        display.value = 'Error';
    }
}
