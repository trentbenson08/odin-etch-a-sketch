const gridContainer = document.querySelector('#gridContainer');
const CELL_TOTAL = 256;
for(let i = 0; i<CELL_TOTAL; i++){
    const newCell = document.createElement('div');
    newCell.classList.add('gridCell')
    gridContainer.appendChild(newCell)
}

const cellList = document.querySelectorAll('.gridCell');
cellList.forEach(element => {
    element.addEventListener('mouseover', e => {
        console.log(e.target);
        e.target.style.background = 'red';
    })
});