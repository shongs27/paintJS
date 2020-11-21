const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const save = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    
}

function changeColor(event){
    const background_color = event.target.style.backgroundColor;
    ctx.strokeStyle = background_color;
    ctx.fillStyle = background_color;
}

function changeRange(e){
    ctx.lineWidth = e.target.value;
}

function changeMode(){
    
    if(filling === true){
        filling = false
        mode.innerText = "Fill";
    }else {
        filling = true
        mode.innerText = "Paint"; 
        
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,canvas.width, canvas.height);
    }
}

function handleStop(e){
    e.preventDefault();
}

function savePaint(){
    const image = canvas.toDataURL('image/png');
    const link = document.createElement("a")
    link.href = image;
    link.download = "image!!!";
    link.click();
}


Array.from(colors).forEach(event => event.addEventListener('click', changeColor));

if(mode){
    mode.addEventListener('click', changeMode)
}

if(range){
    range.addEventListener('input', changeRange);
}

if(save){
    save.addEventListener('click', savePaint);
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);    
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleStop);
}