
function makeGrid(height, width) {
    const screen = document.getElementById("screen");
    screen.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    for(i=0; i< (height); i++){
        for(j=0; j<width; j++){
        let a = document.createElement("div");
        a.className = "pwdr";
        a.id = `${i}-${j}`;
        screen.appendChild(a);
    }
}
}
function draw(){
    
}
