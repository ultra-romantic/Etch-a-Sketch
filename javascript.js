let scale=16;

function createSquare(){
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.border= "1px solid grey";
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor="black";
    });
    return gridSquare;
}

function createGrid(){
    const gridContainer = document.getElementById("grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${scale}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${scale}, auto)`;
    for(let i=0;i<(scale*scale);i++){
        gridContainer.appendChild(createSquare());
    };
}

/*function askNewScale(){
    let newScale=prompt("Please enter a number from 1 to 100", "");
    parseInt(newScale, 10);
    if(isNaN(newScale)===false){
        if((newScale<=100) || (newScale>=1)){
            return newScale;
        }else {
            alert("Must be between 1 - 100");
        }return false;
    }else if (isNaN(newScale)){
        alert("Must be a numeric value");
        return false;
    }
}

function gridDelete(grid){
    for(let i=0;i<(scale*scale);i++){
        grid.remove();
    };
}*/

createGrid();

/*const changeGridBtn = document.getElementById("change-grid");
changeGridBtn.addEventListener('click', e => {
    const gridContainer = document.getElementById("grid-container");
    let a=askNewScale();
    console.log(a);
    gridDelete(gridContainer);
    createGrid();
})*/

/*
function generateNewGrid(n){
    for(let i=0;i<(n*n);i++){
        const gridSquare = document.createElement("div");
        gridSquare.remove();
    };

*/