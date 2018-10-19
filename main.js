let x = 100;
let y = 100;

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(220);
    ellipse(x, y, 40, 40);
}

function keyPressed() {
    switch (keyCode) {
        case 39:
            x += 10;
            break;
        case 40:
            y += 10;
            break;
    }
}