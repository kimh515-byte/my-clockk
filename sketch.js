
let lastMinute = -1;

function setup() {
  createCanvas(600, 450);
}

function draw() {
  background(245, 241, 233);

  let h = hour();
  let m = minute();
  let s = second();

  // Print minute when it changes
  if (m !== lastMinute) {
    console.log(m);
    lastMinute = m;
  }

  // Title
  fill(30);
  noStroke();
  textSize(18);
  text("MY CLOCK", 50, 55);

  // Digital time
  textSize(45);
  text(
    nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2),
    50, 135
  );

  // Bar backgrounds
  fill(220);
  rect(50, 200, 500, 25);
  rect(50, 280, 500, 25);
  rect(50, 360, 500, 25);

  // Hour bar
  fill(232, 118, 98);
  rect(50, 200, map(h, 0, 24, 0, 500), 25);

  // Minute bar
  fill(108, 141, 163);
  rect(50, 280, map(m, 0, 60, 0, 500), 25);

  // Second bar
  fill(154, 171, 131);
  rect(50, 360, map(s, 0, 60, 0, 500), 25);

  // Labels
  fill(30);
  textSize(16);
  text("HOUR", 50, 190);
  text("MINUTE", 50, 270);
  text("SECOND", 50, 350);

  textSize(12);
  text("TIME IS ALWAYS MOVING.", 50, 420);
}
