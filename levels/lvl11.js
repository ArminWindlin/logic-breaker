class Lvl11 {
    constructor() {
        this.p;
        this.score = 1000;
        this.x = 200;
        this.y = 200;
        this.countdown = 4;
        this.cnv;
        this.player;
        this.target;
        this.blocks;
        this.bullets;
        this.velocityX = 0;
        this.velocityY = 0;
        this.sketch;
        this.setup();
        this.countScore();
    }

    setup() {
        this.sketch = (p) => {

            p.setup = () => {
                this.p = p;
                this.cnv = p.createCanvas(600, 600);
                p.background(0, 0, 0);
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                this.cnv.style('box-shadow', '0 0 30px 10px red');
                this.target = p.createSprite(500, 500, 20, 20);
                this.target.shapeColor = p.color(0, 0, 0);
                this.player = p.createSprite(this.x, this.y, 40, 40);
                this.player.shapeColor = p.color(0, 0, 255);
                this.bullets = new p.Group();
                this.blocks = new p.Group();
                for (let i = 0; i < 8; i++) {
                    this.block = p.createSprite(p.random(p.width - 60) + 30, p.random(p.height - 60) + 30, 30, 30);
                    this.block.shapeColor = p.color(244, 191, 66);
                    this.blocks.add(this.block);
                }
            };

            p.draw = () => {
                p.background(0, 0, 0);

                this.bullets.overlap(this.blocks, removal);

                function removal(spriteA, spriteB) {
                    spriteA.remove();
                    spriteB.remove();
                }

                if (this.player.overlap(this.target) && this.blocks.length === 0) {
                    p.noLoop();
                    updateScore(this.score);
                    lvlNumber = 100;
                }

                if (this.blocks.length === 0) {
                    this.target.shapeColor = p.color(255, 0, 0);
                }

                if (tensorControl) {
                    // TENSOR CONTROLLER
                    if (localStorage.controller == 3) {
                        this.velocityX = 3;
                        this.velocityY = 0;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                    if (localStorage.controller == 2) {
                        this.velocityX = -3;
                        this.velocityY = 0;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                    if (localStorage.controller == 1) {
                        this.velocityX = 0;
                        this.velocityY = 3;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                    if (localStorage.controller == 0) {
                        this.velocityX = 0;
                        this.velocityY = -3;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                } else {
                    // KEY LISTENER
                    if (p.keyIsDown(p.RIGHT_ARROW)) {
                        this.velocityX = 3;
                        this.velocityY = 0;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                    if (p.keyIsDown(p.LEFT_ARROW)) {
                        this.velocityX = -3;
                        this.velocityY = 0;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                    if (p.keyIsDown(p.DOWN_ARROW)) {
                        this.velocityX = 0;
                        this.velocityY = 3;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                    if (p.keyIsDown(p.UP_ARROW)) {
                        this.velocityX = 0;
                        this.velocityY = -3;
                        this.player.setVelocity(this.velocityX, this.velocityY);
                    }
                    if (p.keyIsDown(32)) {
                        this.bullets.add(p.createSprite(this.player.position.x, this.player.position.y, 5, 5));
                        this.bullets.get(this.bullets.length - 1).shapeColor = p.color(127, 161, 163);
                        this.bullets.get(this.bullets.length - 1).setVelocity(this.velocityX * 3, this.velocityY * 3);
                    }
                }

                p.textSize(20);
                p.fill(255);
                p.text('Press Space', 250, 25);

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

}
