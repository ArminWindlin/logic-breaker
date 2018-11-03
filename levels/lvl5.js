class Lvl5 {
    constructor() {
        this.p;
        this.x = 25;
        this.y = 25;
        this.x_c = 0;
        this.y_c = 0;
        this.speed = 3;
        this.cnv;
        this.player;
        this.target;
        this.barrier;

        this.sketch;
        this.setup();
        this.countScore();
    }

    setup() {
        this.sketch = (p) => {

            p.setup = () => {
                this.p = p;
                this.score = 1000;
                this.cnv = p.createCanvas(300, 300);
                this.player = p.createSprite(this.x, this.y, 40, 40);
                this.player.shapeColor = p.color(0, 0, 255);
                this.target = p.createSprite(280, 280, 20, 20);
                this.target.shapeColor = p.color(255, 0, 0);
                this.barrier = p.createSprite(150, 150, 200, 200);
                this.barrier.shapeColor = p.color(61, 57, 55);
                this.cnv.style('box-shadow', '0 0 30px 10px red');
                this.y_c = (p.windowHeight - p.height) / 2;
                this.keylock = false;
            };

            p.draw = () => {
                p.background(0, 0, 0);
                this.cnv.position(this.x_c, this.y_c);
                this.x_c += 4;


                if (this.player.overlap(this.target)) {
                    p.noLoop();
                    updateScore(this.score);
                    lvlNumber = 6;
                }
                if (tensorControl) {
                    // TENSOR CONTROLLER
                    if (localStorage.controller == 3) {
                        this.player.setVelocity(2, 0);
                    }
                    if (localStorage.controller == 2) {
                        this.player.setVelocity(-2, 0);
                    }
                    if (localStorage.controller == 1) {
                        this.player.setVelocity(0, 2);
                    }
                    if (localStorage.controller == 0) {
                        this.player.setVelocity(0, -2);
                    }
                } else {
                    // KEY LISTENER
                    if (p.keyIsDown(p.RIGHT_ARROW)) {
                        this.player.setVelocity(2, 0);
                    }
                    if (p.keyIsDown(p.LEFT_ARROW)) {
                        this.player.setVelocity(-2, 0);
                    }
                    if (p.keyIsDown(p.DOWN_ARROW)) {
                        this.player.setVelocity(0, 2);
                    }
                    if (p.keyIsDown(p.UP_ARROW)) {
                        this.player.setVelocity(0, -2);
                    }
                }

                this.x = this.player.position.x;
                this.y = this.player.position.y;

                if (this.player.overlap(this.barrier)) {
                    if (this.x < 150 && this.y < 269 && this.y > 31)
                        this.player.setVelocity(-2, 0);
                    else if (this.x > 150 && this.y < 269 && this.y > 31)
                        this.player.setVelocity(2, 0);
                    else if (this.y < 150)
                        this.player.setVelocity(0, -2);
                    else if (this.y > 150)
                        this.player.setVelocity(0, 2);
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
}
