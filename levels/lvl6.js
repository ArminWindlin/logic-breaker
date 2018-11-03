class Lvl6 {
    constructor() {
        this.p;
        this.score = 1000;
        this.x = 50;
        this.y = 50;
        this.speed = 6;
        this.cnv;
        this.player;
        this.target;
        this.enemies;
        this.enemy;

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
                this.target = p.createSprite(550, 550, 20, 20);
                this.target.shapeColor = p.color(255, 0, 0);
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                this.cnv.style('box-shadow', '0 0 30px 10px red');

                this.enemies = new p.Group();
                for (let i = 0; i < 8; i++) {
                    this.enemy = p.createSprite(p.random(p.width), p.random(p.height - (p.height / 2)) + p.height / 2, 10, 10);
                    this.shapeColor = p.color(150, 0, p.random(255));
                    this.friction = p.random(0.97, 0.99);
                    this.maxSpeed = p.random(1, 4);
                    this.rotateToDirection = true;
                    this.enemies.add(this.enemy);
                }
            };

            p.draw = () => {
                p.background(0, 0, 0);

                this.player.position.x = this.x;
                this.player.position.y = this.y;

                for (let i = 0; i < this.enemies.length; i++) {
                    this.enemies[i].attractionPoint(0.2, this.player.position.x, this.player.position.y);
                }

                if (this.player.overlap(this.enemies)) {
                    this.player.remove();
                }

                if (this.player.overlap(this.target)) {
                    p.noLoop();
                    updateScore(this.score);
                    lvlNumber = 7;
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
