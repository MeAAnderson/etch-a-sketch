
function makeGrid(height, width) {
    const screen = document.getElementById("screen");
    screen.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    for(i=0; i< (height*width); i++){
        let a = document.createElement("div");
        a.className = "pwdr";
        screen.appendChild(a);
    }
}
function draw(){
    console.log(screen);
    let a = document.createElement("div");
    document.appendChild()
}
