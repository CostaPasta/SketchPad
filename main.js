let color = 'black';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
const colorBtn = document.getElementById('colorBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('inputField')
let colorInput = document.querySelector('#colorPicker');
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
createBoard(16);


colorInput.addEventListener('input', () => {
    color = colorInput.value;
})

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

function createBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < (size*size); i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.addEventListener("mousedown", colorSquare)
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}


function changeBoard(input){
    if(input >=2 && input <=64) {
        createBoard(input);
    } else {
        console.log("Pick a value between 2 and 100");
    }
}

function colorSquare(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (color === 'random') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else {
        this.style.backgroundColor = color;
    }

}

function changeColor(choice) {
    color = choice;
    
}

function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');

    colorInput.value = 'black';
    color = 'black';
}


