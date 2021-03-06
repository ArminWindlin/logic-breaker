class Lvl2 {
    constructor() {
        this.p;
        this.score = 1000;
        this.x = 100;
        this.y = 400;
        this.speed = 3;
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
                this.player = p.createSprite(this.x, this.y, 40, 40);
                this.player.shapeColor = p.color(0, 0, 255);
                this.target = p.createSprite(500, 400, 20, 20);
                this.target.shapeColor = p.color(255, 0, 0);
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                this.cnv.style('box-shadow', '0 0 30px 10px red');
            };

            p.draw = () => {
                p.background(0, 0, 0);

                this.player.position.x = this.x;
                this.player.position.y = this.y;


                if (this.player.overlap(this.target)) {
                    p.noLoop();
                    updateScore(this.score);
                    lvlNumber = 5;
                }

                if (tensorControl) {
                    // TENSOR CONTROLLER
                    if (localStorage.controller == 3) {
                        if (this.x < 300 || this.x > 340 || this.y > 650)
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
                        if (this.x < 300 || this.x > 340 || this.y > 650)
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
}