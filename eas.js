//Randomize the squares’ RGB values with each interaction.
//Implement a progressive darkening effect where each interaction darkens the square by 10%. The objective is to achieve a completely black square only ten interactions.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const gridLength = 600;
let activeColor = 'black'

const grid = document.querySelector(".grid");
grid.style.width = `${gridLength}px`;
grid.style.height = `${gridLength}px`;
grid.style.margin = "25px auto";

function random(number) {
    return Math.floor(Math.random()*number);
}

function activateColor(colorChoice) {
    activeColor = colorChoice;
}

function changeColor (event) {
    if(event.type === "mouseover" && !mouseDown) return
        if (activeColor=='random') {
            event.target.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        } else if (activeColor=='black') {
            event.target.style.backgroundColor = "#000000";
        } else if (activeColor=='white') {
            event.target.style.backgroundColor = "#ffffff";
        }  
}

function changeRandom (event) {
    if(event.type === "mouseover" && !mouseDown) return
    event.target.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
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

createGrid(16);

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
        area.textContent = `Sketch area is ${input} x ${input}`;
        area.style.color = "#000000";
     } else {
        area.textContent = "Please enter a number between 1 and 101";
        area.style.color = "#ff0000";
     }
}

