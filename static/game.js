// ========== CANVAS SETUP ==========
// Get the HTML canvas element with id "game" where we'll draw everything
const canvas = document.getElementById("game");
// Get the 2D drawing context - this is what we use to actually draw on the canvas
const ctx = canvas.getContext("2d");

// ========== PLAYER DOT STATE ==========
// x: horizontal position of the player dot (0 = left edge, increases going right)
let x = 300;
// y: vertical position of the player dot (0 = top edge, increases going down)
let y = 200;
// speed: how many pixels the dot moves per frame (change this to make the dot faster or slower)
// Use 'let' instead of 'const' so you can modify it and see changes on the website
let speed = 5;

// ========== KEYBOARD INPUT ==========
// keys: object that tracks which keys are currently being pressed
// Example: keys["ArrowUp"] = true means the up arrow is pressed right now
const keys = {};

// Listen for key presses (when user presses a key down)
window.addEventListener("keydown", (e) => {
  // Set the key to true when pressed
  keys[e.key] = true;
});

// Listen for key releases (when user lifts up a key)
window.addEventListener("keyup", (e) => {
  // Set the key to false when released
  keys[e.key] = false;
});

// ========== UPDATE GAME STATE ==========
// This function runs every frame to check keyboard input and update player position
function update() {
  // Check if up arrow is pressed - if yes, move the dot up (decrease y)
  if (keys["ArrowUp"]) y -= speed;
  // Check if down arrow is pressed - if yes, move the dot down (increase y)
  if (keys["ArrowDown"]) y += speed;
  // Check if left arrow is pressed - if yes, move the dot left (decrease x)
  if (keys["ArrowLeft"]) x -= speed;
  // Check if right arrow is pressed - if yes, move the dot right (increase x)
  if (keys["ArrowRight"]) x += speed;
}

// ========== DRAW EVERYTHING ==========
// This function runs every frame to redraw all game objects on the canvas
function draw() {
  // Clear the entire canvas (remove everything that was drawn last frame)
  // Parameters: x=0, y=0 (top-left corner), width=canvas.width, height=canvas.height
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Begin drawing a new path (shape)
  ctx.beginPath();
  // Draw a circle (arc) at position (x, y) with radius 10
  // Parameters: x position, y position, radius, start angle (0), end angle (Math.PI * 2 = full circle)
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  // Set the color to fill the circle with (blue)
  ctx.fillStyle = "blue";
  // Actually fill in the circle with the color we just set
  ctx.fill();
}

// ========== GAME LOOP ==========
// This is the main loop that keeps the game running continuously
function loop() {
  // Step 1: Update all game state (check input, move player, etc.)
  update();
  // Step 2: Draw everything to the canvas based on the current state
  draw();
  // Step 3: Schedule the next frame - requestAnimationFrame calls loop() again when the browser is ready to draw
  // This typically happens 60 times per second on most monitors
  requestAnimationFrame(loop);
}

// Start the game by calling loop() for the first time
loop();
