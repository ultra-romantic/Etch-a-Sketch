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

function scaleGrid(){
    const gridContainer = document.getElementById("grid-container");
    gridContainer.style.setProperty('--grid-cols', scale);
    gridContainer.style.setProperty('--grid-rows', scale);
    for(let i=0;i<(scale*scale);i++){
        gridContainer.appendChild(createSquare());
    };
}

function askNewScale(){
    let newScale=prompt("Please enter a number from 1 to 100", "");
    parseInt(newScale, 10);
    if(isNaN(newScale)===false){
        if((newScale<=100) && (newScale>=1)){
            return newScale;
        }else {
            alert("Must be between 1 - 100");
            return false;
        }
    }else if (isNaN(newScale)){
        alert("Must be a numeric value");
        return false;
    }
}

scaleGrid();

const changeGridBtn = document.getElementById("change-grid");
changeGridBtn.addEventListener('click', () => {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML= '';
    scale=askNewScale();
    scaleGrid();
    })

//future updates: add random color, set back to white , 10% more black 