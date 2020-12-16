let height = 50;
let width =  Math.round(height*1.6);
let x = Math.round(width/2);
let y = Math.round(height/2);
let cursorX = x;
let cursorY = y;
let currentColor = "blue";

let hovering;

let upControl = document.getElementById("up");
upControl.addEventListener("mouseover", function () {
  hovering = setInterval(function () {
    draw("up");
  }, 100);
});
upControl.addEventListener("mouseout", function () {
  clearInterval(hovering);
});

let downControl = document.getElementById("down");
downControl.addEventListener("mouseover", function () {
  hovering = setInterval(function () {
    draw("down");
  }, 100);
});
downControl.addEventListener("mouseout", function () {
  clearInterval(hovering);
});

let leftControl = document.getElementById("left");
leftControl.addEventListener("mouseover", function () {
  hovering = setInterval(function () {
    draw("left");
  }, 100);
});
leftControl.addEventListener("mouseout", function () {
  clearInterval(hovering);
});

let rightControl = document.getElementById("right");
rightControl.addEventListener("mouseover", function () {
  hovering = setInterval(function () {
    draw("right");
  }, 100);
});
rightControl.addEventListener("mouseout", function () {
  clearInterval(hovering);
});

function makeGrid(height, width) {
  const screen = document.getElementById("screen");
  screen.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  screen.style.gridTemplateRows = `repeat(${height}, 1fr)`;
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      let a = document.createElement("div");
      a.className = "pwdr";
      a.id = `${j}-${i}`;
      screen.appendChild(a);
    }
  }
  makeCursor(currentColor);
}

function makeCursor(color){
  const cursor = document.getElementById(`${cursorX}-${cursorY}`);
  cursor.style.backgroundColor = color;
  return cursor;
}

function draw(direction) {
  if (x < 0) {
    x += 1;
  } else if (x >= width) {
    x -= 1;
  }
  if (y < 0) {
    y += 1;
  } else if (y >= height) {
    y -= 1;
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
  let current = document.getElementById(`${x}-${y}`);
  current.style.backgroundColor = "blue";
}
