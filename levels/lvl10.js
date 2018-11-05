class Lvl10 {
    constructor() {
        this.p;
        this.score = 1000;
        this.x = 200;
        this.y = 200;
        this.x_t = 200;
        this.y_t = 200;
        this.speed = 4;
        this.countdown = 4;
        this.cnv;
        this.player;
        this.target;
        this.blocks;
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
                this.player = p.createSprite(this.x_c, this.y_c, 40, 40);
                this.player.shapeColor = p.color(0, 0, 255);
                this.target = p.createSprite(p.random(p.width), p.random(p.height), 20, 20);
                this.target.shapeColor = p.color(255, 0, 0);
                this.blocks = new p.Group();
                for (let i = 0; i < 40; i++) {
                    this.block = p.createSprite(p.random(p.width), p.random(p.height), 80, 80);
                    this.block.shapeColor = p.color(20, 20, p.random(30));
                    this.blocks.add(this.block);
                }
            };

            p.draw = () => {
                p.background(0, 0, 0);
                this.player.position.x = this.x;
                this.player.position.y = this.y;

                this.player.displace(this.blocks);

                if (this.player.overlap(this.target)) {
                    if (this.countdown === 0) {
                        p.noLoop();
                        updateScore(this.score);
                        lvlNumber = 11;
                    } else {
                        this.target.position.x = p.random(p.width);
                        this.target.position.y = p.random(p.height);
                        this.countdown--;
                    }
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
