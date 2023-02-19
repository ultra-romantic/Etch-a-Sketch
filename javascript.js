for(let i=0;i<(16*16);i++){
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.border= "1px solid grey";
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor="black";
    });
    const gridContainer = document.getElementById("grid-container");
    gridContainer.appendChild(gridSquare);
};
