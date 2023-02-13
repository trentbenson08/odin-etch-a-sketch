function main(){
    createGrid();
    const resizeGridButton = document.querySelector('#resizeGridButton');
    resizeGridButton.addEventListener('click', () => {
        gridSize = parseInt(prompt("Enter desired grid height/width:"));
        const gridContainer = document.querySelector('#gridContainer');
        const numOfChildren = document.querySelectorAll('.gridCell').length;
        for(let i=0; i<numOfChildren; i++){
            gridContainer.removeChild(gridContainer.lastElementChild);
        }
        createGrid(gridSize);
    })
}

function createGrid(gridSize = 16){
    const gridContainer = document.querySelector('#gridContainer');
    let cellTotal = gridSize ** 2;
    for(let i = 0; i<cellTotal; i++){
        const newCell = document.createElement('div');
        newCell.classList.add('gridCell');
        newCell.style.cssText =`
                                min-width : ${(960/gridSize).toFixed(1)}px;
                                min-height : ${(960/gridSize).toFixed(1)}px;
                                `;
        gridContainer.appendChild(newCell);
    }
    const cellList = document.querySelectorAll('.gridCell');
    cellList.forEach(element => {
        element.addEventListener('mouseover', e => {
            e.target.style.background = 'red';
        })
    });
}

main();