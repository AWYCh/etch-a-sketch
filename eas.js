const sizeButton = document.querySelector("#size");
const blackButton = document.querySelector("#defaultColor");
const randomButton = document.querySelector("#randomColor");
const darkenButton = document.querySelector("#darken");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const gridLength = 600;
let activeColor = 'black'
let activeSize = 16;

const grid = document.querySelector(".grid");
grid.style.width = `${gridLength}px`;
grid.style.height = `${gridLength}px`;

function random(number) {
    return Math.floor(Math.random()*number);
}

function activateColor(colorChoice) {
    activeColor = colorChoice;
}

function activateButton (activeColor) {
    if (activeColor==='random') {
        randomButton.classList.add('active');
        blackButton.classList.remove('active');
        darkenButton.classList.remove('active');
        eraserButton.classList.remove('active')
    } else if (activeColor==='black') {
        blackButton.classList.add('active');
        randomButton.classList.remove('active');
        darkenButton.classList.remove('active');
        eraserButton.classList.remove('active')
    } else if (activeColor==='white') {
        eraserButton.classList.add('active');
        blackButton.classList.remove('active');
        randomButton.classList.remove('active');
        darkenButton.classList.remove('active')
    } else if (activeColor==='darken') {
        darkenButton.classList.add('active');
        randomButton.classList.remove('active');
        blackButton.classList.remove('active');
        eraserButton.classList.remove('active')
    } 
}

function changeColor (e) {
    if(e.type === "mouseover" && !mouseDown) return
        if (activeColor=='random') {
            e.target.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        } else if (activeColor=='black') {
            e.target.style.backgroundColor = "#000000";
        } else if (activeColor=='white') {
            e.target.style.backgroundColor = "#ffffff";
        } else if (activeColor=='darken') {
            e.target.style.backgroundColor = "rgb(0 0 0)";
            if(e.target.style.opacity < 1) {
            e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
        }}     
}

function createGrid(size) {
    for (let i=0; i<(size*size); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.style.width = `${(gridLength/size)}px`;
        gridSquare.style.height = `${(gridLength/size)}px`;
        gridSquare.style.backgroundColor = "#ffffff";
        gridSquare.classList.add("grid-square");
        
        gridSquare.addEventListener ("mouseover", changeColor);
        gridSquare.addEventListener ("mousedown", changeColor);
        grid.appendChild(gridSquare);
    }
}

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function changeSize() {
    let input = prompt("Enter number of squares per side");
    let area = document.querySelector("#input-area");
     if (input > 1 && input <= 100) {
        removeGrid();
        createGrid(input);
        sizeButton.textContent = `${input} x ${input}`;
        area.textContent = "";
        activeSize = input;
     } else if (input === null) {
        area.textContent = "";
     } else {
        area.textContent = "Please enter a number between 1 and 101";
        area.style.color = "#ff0000";
     }
}

function clearGrid() {
    removeGrid();
    createGrid(activeSize);
}

sizeButton.textContent = `${activeSize} x ${activeSize}`;
createGrid(activeSize);
activateButton(activeColor);
sizeButton.addEventListener("click", changeSize);
blackButton.addEventListener("click", () => {
    activateColor('black');
    activateButton('black');
})
randomButton.addEventListener("click", () => {
    activateColor('random');
    activateButton('random');
})
eraserButton.addEventListener("click", () => {
    activateColor('white');
    activateButton('white');
})
darkenButton.addEventListener("click", () => {
    activateColor('darken');
    activateButton('darken');
})
clearButton.addEventListener("click", clearGrid);