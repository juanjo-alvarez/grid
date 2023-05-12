let seconds = 0;
let start = false;
let selected = null;
let win = 0;
let elements = 0;
const colors = ["yellow","orange","red","blue","green","magenta","blueviolet","pink","maroon","lime","aqua","orange","olive","grey","gold","cyan","silver","purple","navy","teal","beige","darkslateblue","deeppink","fuchsia","salmon"];

window.onload = function(){
    document.getElementById("play").onclick = function(){
        elements = parseInt(document.getElementById("elements").value);
        generategrid(elements);
    }
    let timer = document.getElementById("timer");
    setInterval(function () {
        if(start){
            timer.innerHTML=seconds;
            seconds++;
        }
    }, 1000);
}

function generategrid(elements){
    if(isNaN(elements)){
        alert("El campo de elementos tiene que ser un número");
        return;
    }
    if(elements % 2 !=0){
        alert("Es necesario que el número sea par");
        return;
    }
    if(elements>50){
        alert("El máximo permitido es 50");
        return;
    }
    seconds = 0;
    win = 0;
    start = true;
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

    let widthWithoutElementBorder = totalWidth - (cols*2);
    let heihtWithoutElementBorder = totalHeight - (rows*2);
    
    let elementWidth = widthWithoutElementBorder/cols;
    let elementHeight = heihtWithoutElementBorder/rows;

    let numElements = (square*square)+rest;
    addElements(grid,numElements,elementWidth,elementHeight)
    
}

function addElements(grid,num,width,height){
    let values = generateArrayPairs(num/2);
    for(let i=0;i<num;i++){
        let newElement = document.createElement("div");
        newElement.className = "element";
        newElement.style.width = width+"px";
        newElement.style.height = height+"px";
        newElement.onclick = reviewValue;
        newElement.insideValue = values[i];
        grid.appendChild(newElement);
    }
}

function reviewValue(){
    if(selected == null){
        selected = this;
        this.style.backgroundColor  = colors[this.insideValue];
    }else{
        let valor1 = this.insideValue;
        let valor2 = selected.insideValue;
        if(valor1 == valor2){
            generateSuccess(this);
        }else{
            this.style.backgroundColor  = colors[this.insideValue];
            setTimeout(clearElement, 500, selected);
            setTimeout(clearElement, 500, this);
            selected = null;
        }
    }
}

function clearElement(element){
    element.style.backgroundColor = "white";
}



function generateSuccess(pair){
    win++;
    pair.style.backgroundColor = colors[selected.insideValue]
    pair.borderColor = "red";
    selected.borderColor = "red";
    pair.onclick = null;
    selected.onclick = null;
    selected = null;
    if(elements==win*2){
        start = false;
        addResult();
    }
}

function addResult(){
    results = document.getElementById("results");
    let newElement = document.createElement("div");
    newElement.innerHTML = "Elementos:"+elements+" Segundos:"+seconds;
    results.appendChild(newElement);
    
}

function generateArrayPairs(size){
    let ordered = [];
    let unordered = [];
    for(let i=0;i<size;i++){
        ordered.push(i);
        ordered.push(i);
    }
    for(let i=0;i<size*2;i++){
        let pos = random(0,ordered.length-1);
        unordered.push(ordered[pos]);
        ordered.splice(pos,1);
    }
    return unordered;
}



function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}