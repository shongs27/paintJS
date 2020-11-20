const canvas = document.querySelector('jsCanvas');

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false


function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = ture;
}


function onMouseMove(event){
    const x = event.offset;
    const y = event.offset;
    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.strokeStyle()cd ;
    }
}

function onMouseDown(event){
    painting = true;
}

function init(){
    if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    }
}