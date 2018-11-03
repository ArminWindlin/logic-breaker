class Lvl8 {
    constructor() {
        this.p;
        this.score = 1000;
        this.x = 30;
        this.y = 570;
        this.speed = -3;
        this.cnv;
        this.player;
        this.target;
        this.block1;
        this.block2;
        this.block3;
        this.blocks;

        this.sketch;
        this.setup();
        this.countScore();
        this.mixUp();
    }

    setup() {
        this.sketch = (p) => {

            p.setup = () => {
                this.p = p;
                this.cnv = p.createCanvas(600, 600);
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                this.cnv.style('box-shadow', '0 0 30px 10px red');
                this.player = p.createSprite(this.x, this.y, 40, 40);
                this.player.shapeColor = p.color(0, 0, 255);
                this.target = p.createSprite(550, 50, 20, 20);
                this.target.shapeColor = p.color(255, 0, 0);
                this.blocks = new p.Group();
                this.block1 = p.createSprite(550, 550, 80, 80);
                this.block1.shapeColor = p.color(61, 57, 55);
                this.blocks.add(this.block1);
                this.block2 = p.createSprite(50, 50, 80, 80);
                this.block2.shapeColor = p.color(61, 57, 55);
                this.blocks.add(this.block2);
                this.block3 = p.createSprite(550, 50, 80, 80);
                this.block3.shapeColor = p.color(61, 57, 55);
                this.blocks.add(this.block3);
            };

            p.draw = () => {
                p.background(0, 0, 0);

                this.player.position.x = this.x;
                this.player.position.y = this.y;

                this.player.displace(this.blocks);

                if (this.player.overlap(this.target)) {
                    p.noLoop();
                    updateScore(this.score);
                    lvlNumber = 9;
                }

                if (tensorControl) {
                    // TENSOR CONTROLLER
                    if (localStorage.controller == 3) {
                        this.x += this.speed;
                    }
                    if (localStorage.controller == 2) {
                        this.x -= this.speed;
                    }
                    if (localStorage.controller == 1) {
                        this.y += this.speed;
                    }
                    if (localStorage.controller == 0) {
                        this.y -= this.speed;
                    }
                } else {
                    // KEY LISTENER
                    if (p.keyIsDown(p.RIGHT_ARROW)) {
                        this.x += this.speed;
                    }
                    if (p.keyIsDown(p.LEFT_ARROW)) {
                        this.x -= this.speed;
                    }
                    if (p.keyIsDown(p.DOWN_ARROW)) {
                        this.y += this.speed;
                    }
                    if (p.keyIsDown(p.UP_ARROW)) {
                        this.y -= this.speed;
                    }
                }

                p.drawSprites();

            }

        };


    }

    countScore() {
        setInterval(() => {
            if (this.score > 200)
                this.score -= 25;
        }, 1000);
    }

    mixUp() {
        setInterval(() => {
            this.speed *= -1;
        }, 3000)

    }

}
