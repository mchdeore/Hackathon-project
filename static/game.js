const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Dot state
let x = 300;
let y = 200;
const speed = 5;

// Key state
const keys = {};

// Listen for key presses
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Update game state
function update() {
  if (keys["ArrowUp"]) y -= speed;
  if (keys["ArrowDown"]) y += speed;
  if (keys["ArrowLeft"]) x -= speed;
  if (keys["ArrowRight"]) x += speed;
}

// Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
}

// Game loop
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
