let gridXSize = 16;
let gridYSize = 16;
let paintColor = '#000000'
let isMouseDown = false;

const sketchContainer = document.getElementById('sketchContainer');
sketchContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
})

document.getElementById('sizeChange').addEventListener("click", () => {
    let size = window.prompt("Input grid size");

    if(size > 100){
        size = 100;
    }

    gridXSize = size;
    gridYSize = size;
    clearGrid();
    populateGrid();
})

function populateGrid(){
    for(i = 0; i < gridXSize; i++){
        let rowDiv = document.createElement('div');
        rowDiv.style.cssText = 'display: flex; flex: 1';
        sketchContainer.appendChild(rowDiv);
        for(j = 0; j < gridXSize; j++){
            let box = document.createElement('div');
            box.draggable = false;
            box.addEventListener("mousedown", () => {
                isMouseDown = true;
            })
            box.addEventListener("mouseup", () => {
                isMouseDown = false;
            })
            box.addEventListener("mouseenter",  () => {
                if(isMouseDown == true){
                    box.style.backgroundColor = paintColor;
                }
            })
            box.classList.add('sketchBox');
            rowDiv.appendChild(box);
        }
    }
}

function clearGrid(){
    sketchContainer.innerHTML = ' ';
}

window.onload = () => {
    populateGrid();
}