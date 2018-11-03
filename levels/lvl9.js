class Lvl9 {
    constructor() {
        this.p;
        this.score = 1000;
        this.x = 200;
        this.y_c = 200;
        this.x_c = 200;
        this.y = 200;
        this.y_t = 10;
        this.speed = 4;
        this.cnv;
        this.player;
        this.target;
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
                this.cnv.position(this.x, this.y);
                this.cnv.style('box-shadow', '0 0 30px 10px red');
                this.player = p.createSprite(this.x_c, this.y_c, 40, 40);
                this.player.shapeColor = p.color(0, 0, 255);
                this.target = p.createSprite(550, this.y_t, 20, 20);
                this.target.shapeColor = p.color(255, 0, 0);
            };

            p.draw = () => {
                p.background(0, 0, 0);
                this.cnv.position(this.x_c, this.y_c);
                this.target.position.y = this.y_t;
                this.player.position.x = this.x;
                this.player.position.y = this.y;

                this.y_t += 2;

                if (this.player.overlap(this.target)) {
                    p.noLoop();
                    updateScore(this.score);
                    lvlNumber = 10;
                }

                if (tensorControl) {
                    // TENSOR CONTROLLER
                    if (localStorage.controller == 3) {
                        this.x_c += this.speed;
                        this.x -= this.speed;
                    }
                    if (localStorage.controller == 2) {
                        this.x_c -= this.speed;
                        this.x += this.speed;
                    }
                    if (localStorage.controller == 1) {
                        this.y_c += this.speed;
                        this.y -= this.speed;
                    }
                    if (localStorage.controller == 0) {
                        this.y_c -= this.speed;
                        this.y += this.speed;
                    }
                } else {
                    // KEY LISTENER
                    if (p.keyIsDown(p.RIGHT_ARROW)) {
                        this.x_c += this.speed;
                        this.x -= this.speed;
                    }
                    if (p.keyIsDown(p.LEFT_ARROW)) {
                        this.x_c -= this.speed;
                        this.x += this.speed;
                    }
                    if (p.keyIsDown(p.DOWN_ARROW)) {
                        this.y_c += this.speed;
                        this.y -= this.speed;
                    }
                    if (p.keyIsDown(p.UP_ARROW)) {
                        this.y_c -= this.speed;
                        this.y += this.speed;
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

}
