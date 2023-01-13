let container = document.querySelector('.container');

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

createGrid(16);

function colorSquares() {
  let squares = container.children;
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", (e) => {
      let targetCell = e.target;
      targetCell.style.backgroundColor = getRandomColor();
      targetCell.addEventListener("mouseover", (e) => {
        let newColor = e.target.style.backgroundColor;
        newColor = newColor
          .substring(4, newColor.length - 1)
          .replace(/ /g, "")
          .split(",");
        let darkerColor = `rgb(${newColor[0] - 25.5} ${newColor[1] - 25.5} ${
          newColor[2] - 25.5
        })`;
        e.target.style.backgroundColor = darkerColor;
      });
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

function getRandomColor() {
  let firstColor = Math.floor(Math.random() * 256);
  let secondColor = Math.floor(Math.random() * 256);
  let thirdColor = Math.floor(Math.random() * 256);
  let alpha = Math.floor(Math.random() * 10);
  return `rgb(${firstColor} ${secondColor} ${thirdColor})`;
}

// / .${alpha}