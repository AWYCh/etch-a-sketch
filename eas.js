const sizeButton = document.querySelector("#size");
const blackButton = document.querySelector("#black");
const randomButton = document.querySelector("#random");
const darkenButton = document.querySelector("#darken");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
const inputSize = document.querySelector("#inputSize");
const pens = document.querySelectorAll(".pens button");

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
    randomButton.classList.remove('active');
    blackButton.classList.remove('active');
    darkenButton.classList.remove('active');
    eraserButton.classList.remove('active')
    if (activeColor==='random') {
        randomButton.classList.add('active');
    } else if (activeColor==='black') {
        blackButton.classList.add('active');
    } else if (activeColor==='eraser') {
        eraserButton.classList.add('active');
    } else if (activeColor==='darken') {
        darkenButton.classList.add('active');
    } 
}

function changeColor (e) {
    if(e.type === "mouseover" && !mouseDown) return
        if (activeColor=='random') {
            e.target.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        } else if (activeColor=='black') {
            e.target.style.backgroundColor = "rgba(0 0 0)";
        } else if (activeColor=='eraser') {
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

function changeSize(input) {
    let error = document.querySelector("#error");
     if (input > 1 && input <= 100) {
        removeGrid();
        createGrid(input);
        error.textContent = "";
        activeSize = input;
     } else if (input === null) {
        error.textContent = "";
     } else {
        error.textContent = "Please enter a number between 1 and 101";
     }
}

function clearGrid() {
    removeGrid();
    createGrid(activeSize);
}

createGrid(activeSize);
activateButton(activeColor);
sizeButton.addEventListener("click", () => {
    changeSize(inputSize.value);
})
inputSize.addEventListener("change", () => {
    changeSize(inputSize.value);
})
pens.forEach(button => {
    button.addEventListener("click", (e) => {
        let activeColor = (e.target.id);
        activateColor(activeColor);
        activateButton(activeColor);
    })
})
clearButton.addEventListener("click", clearGrid);