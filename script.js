let container = document.querySelector('.container');

// let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
function createGrid(number) {
  for (let i = 0; i < number; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    for (let j = 1; j < number; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      container.append(square);
    }
  }
  document.body.appendChild(container);
}

createGrid(20);

function colorSquares(){
    let squares = container.children;
    for(let i=0;i<squares.length;i++){
        squares[i].addEventListener('mouseover', (e) => {
            e.target.classList.add('colored-square')
        });
    }
}
colorSquares();

const gridBtn = document.querySelector('.gridBtn');

gridBtn.addEventListener('click', setGrid)

function setGrid(){
    let squareNumber = prompt('Enter a number of squares per side');
    while(squareNumber > 100){
        squareNumber = parseInt(prompt('Enter a smaller number'));
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`;
    createGrid(squareNumber);
    colorSquares();
    }


