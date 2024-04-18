//Create a webpage with a 16x16 grid of square divs.
//Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
//Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
const gridLength = 500;
let rows = 16;
let columns = 16;

const grid = document.querySelector(".grid");
grid.style.width = `${gridLength}px`;
grid.style.height = `${gridLength}px`;

function createGridSquare() {
    for (let i=0; i<(rows*columns); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.style.width = `${(gridLength/rows)-2}px`;
        gridSquare.style.height = `${(gridLength/columns)-2}px`;
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
}

createGridSquare();

