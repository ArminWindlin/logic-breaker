class Lvl1 {
    constructor() {
        this.p;
        this.score = 1000;
        this.x = 100;
        this.y = 100;
        this.speed = 3;
        this.cnv;
        this.hud = "go to the red target";
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
                this.target.shapeColor = p.color(255, 0, 0)
            };

            p.draw = () => {
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                p.background(0);
                this.cnv.style('box-shadow', '0 0 30px 10px red');
                p.textSize(20);
                p.fill(255);
                p.text(this.hud, 200, 25);

                this.player.position.x = this.x;
                this.player.position.y = this.y;

                if (this.player.overlap(this.target)) {
                    p.noLoop();
                    updateScore(this.score);
                    lvlNumber = 2;
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
}