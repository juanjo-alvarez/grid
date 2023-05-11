let seconds=0;

window.onload = function(){
    document.getElementById("generate").onclick = function(){
        let elements = document.getElementById("elements").value;
        generategrid(elements);
    }
    let timer = document.getElementById("timer");
    setInterval(function () {
        timer.innerHTML=seconds;
        if(seconds>0){
            seconds++;
        }
    }, 1000);
}

function generategrid(elements){
    if(elements % 2 !=0){
        alert("Es necesario que el número sea par");
        return;
    }
    seconds=1;
    let grid = document.getElementById("grid");
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    let totalWidth = parseFloat(grid.clientWidth);
    let totalHeight = parseFloat(grid.clientHeight);

    let square = Math.floor(Math.sqrt(elements));
    let rest = elements - (square*square);
    let rows = square
    let cols = square
    if(rest > 0){
        rows++;
        if(rest>cols){
            cols++;
        }
    }
    
    

    let withWithoutElementBorder = totalWidth - (cols*2);
    let heihtWithoutElementBorder = totalHeight - (rows*2);
    
    let elementWidth = withWithoutElementBorder/cols;
    let elementHeight = heihtWithoutElementBorder/rows;

    let numElements = (square*square)+rest;

    for(let i=0;i<numElements;i++){
        let newElement = document.createElement("div");
        newElement.className = "element";
        newElement.style.width = elementWidth+"px";
        newElement.style.height = elementHeight+"px";
        grid.appendChild(newElement);
    }
}