let height = 25;
let width = 40;
let x = -1;
let y = -1;

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
      a.id = `${i}-${j}`;
      screen.appendChild(a);
    }
  }
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
  let current = document.getElementById(`${y}-${x}`);
  current.style.backgroundColor = "blue";
}
