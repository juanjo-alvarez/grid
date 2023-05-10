window.onload = function(){
    document.getElementById("generate").onclick = function(){
        let rows = document.getElementById("rows").value;
        let cols = document.getElementById("cols").value;
        generategrid(rows,cols);
    }
}

function generategrid(rows,cols){
    let grid = document.getElementById("grid");
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    let totalWidth = parseFloat(grid.clientWidth);
    let totalHeight = parseFloat(grid.clientHeight);

    let withWithoutElementBorder = totalWidth - (cols*2);
    let heihtWithoutElementBorder = totalHeight - (rows*2);
    
    let elementWidth = withWithoutElementBorder/cols;
    let elementHeight = heihtWithoutElementBorder/rows;

    let numElements = cols*rows;

    for(let i=0;i<numElements;i++){
        let newElement = document.createElement("div");
        newElement.className = "element";
        newElement.style.width = elementWidth+"px";
        newElement.style.height = elementHeight+"px";
        grid.appendChild(newElement);
    }
}