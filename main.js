let x = 100;
let y = 100;
let speed = 3;
let cnv;
let hud = "reach the red target";

let player;
let block;

function setup() {
    cnv = createCanvas(600, 600);
    player = createSprite(x, y, 40, 40);
    player.shapeColor = color(0,0,255)
    target = createSprite(500, 400, 20, 20);
    target.shapeColor = color(255, 0, 0)
}

function draw() {
    cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    background(150, 200, 250);
    text(hud, 100, 20);

    player.position.x = x;
    player.position.y = y;

    if (player.overlap(target)) {
        hud = "WINNER";
    } else {
        hud = "reach the red target";
    }

    // KEY LISTENER
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

    drawSprites();
}

function collisionTester(x1, y1, width1, height1, x2, y2, width2, height2) {
    return (x1 < x2 + width2 && x1 + width1 > x2 && y1 < y2 + height2 && height1 + y1 > y2);
}
