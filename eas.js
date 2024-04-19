//Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const gridLength = 500;
let rows = 16;
let columns = 16;

const grid = document.querySelector(".grid");
grid.style.width = `${gridLength}px`;
grid.style.height = `${gridLength}px`;
grid.style.margin = "150px auto";

function changeColor (event) {
    if(event.type === "mouseover" && !mouseDown) return
    event.target.style.backgroundColor = "#000000";
    }

function createGrid() {
    for (let i=0; i<(rows*columns); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.style.width = `${(gridLength/rows)}px`;
        gridSquare.style.height = `${(gridLength/columns)}px`;
        gridSquare.style.backgroundColor = "#ffffff";
        gridSquare.classList.add("grid-square");
        
        gridSquare.addEventListener ("mouseover", changeColor);
        gridSquare.addEventListener ("mousedown", changeColor);
        grid.appendChild(gridSquare);
    }
}

createGrid();

