class LvL1 {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.speed = 3;
        this.cnv;
        this.hud = "reach the red target";
        this.player;
        this.target;

    }

    setup() {
        this.cnv = createCanvas(600, 600);
        this.player = createSprite(this.x, this.y, 40, 40);
        this.player.shapeColor = color(0, 0, 255);
        this.target = createSprite(500, 400, 20, 20);
        this.target.shapeColor = color(255, 0, 0)
    }

    draw() {
        this.cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
        background(150, 200, 250);
        text(this.hud, 100, 20);

        this.player.position.x = this.x;
        this.player.position.y = this.y;

        if (this.player.overlap(this.target)) {
            this.hud = "WINNER";
        } else {
            this.hud = "reach the red target";
        }

        // KEY LISTENER
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }

        drawSprites();
    }
}
