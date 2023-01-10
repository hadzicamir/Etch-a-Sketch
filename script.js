let container = document.querySelector('.container');
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;
let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

console.log(containerWidth, containerHeight);
console.log(width, height)
for(let i=0;i<16;i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    for(let j=0;j<16;j++){
        let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    }
}



document.body.appendChild(container);