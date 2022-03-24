const btnClear = document.getElementById('btn-clear').addEventListener('click', clearGrid);
const gridRange = document.getElementById('grid-range');
const grid = document.getElementById('grid');
const size = document.getElementById('size');

let gridSize = 40;

gridRange.onchange = (e) => changeGrid(e.target.value);
function gameGrid(num) {
  let grid = num * num;
  for (let i = 0; i < grid; i++) {
    let blocks = document.createElement('div');
    blocks.className = 'block';
    document.getElementById('grid').appendChild(blocks);
  }
  document.getElementById('grid').style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  size.innerText = `${num} x ${num}`;
}
gameGrid(gridSize);

function changeColor() {
  const gridItems = document.querySelectorAll('#grid > div');
  gridItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#eee';
    });
  });
}

changeColor();

function clearGrid() {
  const gridItems = document.querySelectorAll('#grid > div');
  gridItems.forEach((item) => {
    item.style.backgroundColor = '#36648b';
  });
}

function changeGrid(num) {
  grid.innerHTML = '';
  gameGrid(num);
  changeColor();
}
