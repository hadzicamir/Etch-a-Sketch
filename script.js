let container = document.querySelector('.container');

// let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

for(let i=0;i<16;i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    for(let j=1;j<16;j++){
        let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    }
}

document.body.appendChild(container);

let squares = container.children;
for(let i=0;i<squares.length;i++){
    squares[i].addEventListener('mouseover', (e) => {
        e.target.classList.add('colored-square')
    });
}
