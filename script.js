height = 25;
width = 40;
let x = -1;
let y = -1;

function makeGrid(height, width) {
  const screen = document.getElementById("screen");
  screen.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  screen.style.gridTemplateRows = `repeat(${height}, 1fr)`;
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      let a = document.createElement("div");
      a.className = "pwdr";
      a.id = `${i}-${j}`;
      screen.appendChild(a);
    }
  }
}

function draw(direction) {
  if (x<0){
    x+=1;
  } else if (x>=height){
    x-=1;
  }
  if (y<0){
    y+=1;
  } else if (y>=width){
    y-=1;
  }
  
  switch (direction) {
    case "up":
      y -= 1;
      break;
    case "down":
      y += 1;
      break;
    case "left":
      x -= 1;
      break;
    case "right":
      x += 1;
      break;
  }
  let current = document.getElementById(`${y}-${x}`);
  current.style.backgroundColor = "blue";
}
