let x = 100;
let y = 100;
let speed = 3;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(131, 168, 226);
    ellipse(x, y, 40, 40);
    if (keyIsDown(RIGHT_ARROW)) {
        x += speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += speed;
    }
    if (keyIsDown(UP_ARROW)) {
        y -= speed;
    }
}

function keyPressed() {

}
