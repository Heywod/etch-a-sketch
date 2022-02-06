const btnClear = document.getElementById('btnClear').addEventListener('click', clearGrid);
const gridSize = prompt('Enter grid size number between 16-64! Example, 16 = 16x16');
function gameGrid(num) {
  let grid = num * num;
  for (let i = 0; i < grid; i++) {
    let blocks = document.createElement('div');
    blocks.className = 'block';
    document.getElementById('container').appendChild(blocks);
  }
  document.getElementById('container').style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}
gameGrid(gridSize);

function changeColor() {
  const gridItems = document.querySelectorAll('#container > div');
  gridItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#7A7A7A';
    });
  });
}

changeColor();

function clearGrid() {
  const gridItems = document.querySelectorAll('#container > div');
  gridItems.forEach((item) => {
    item.style.backgroundColor = '#fff';
  });
}
