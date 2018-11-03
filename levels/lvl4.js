class Lvl4 {
    constructor() {
        this.capture;
        this.x = 100;
        this.y = 100;
        this.speed = 3;lvl
        this.cnv;
        this.hud = "Tackle the fingerattack";
        this.player;
        this.target;
        this.sketch;
        this.setup();
        this.fingerPoint;
        this.fingerHole;
        this.countScore();
    }


    setup() {
        this.sketch = (p) => {

            p.setup = () => {
                p.createCanvas(1000,1000);
                this.capture = p.createCapture(p.INVERT);
                this.capture.size(320,.240);
                this.fingerPoint = p.loadImage('assets/img/emoji_pointingFinger.png');
                this.fingerHole = p.loadImage('assets/img/emoji_fingerhole.png');

                this.cnv = p.createCanvas(600, 600);
                this.player = p.createSprite(this.x, this.y, 40, 40);
                this.player.addImage("pointingFinger",this.fingerPoint);
                this.target = p.createSprite(500, 400, 20, 20);
                this.target.addImage("fingerHole",this.fingerHole);
            };

            p.draw = () => {
                p.background(255);
                p.image(this.capture,0,0,800,600);
                p.filter(p.INVERT);
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                p.textSize(30);
                p.textStyle(p.BOLD);
                p.text(this.hud, 100, 50);

                this.player.position.x = this.x;
                this.player.position.y = this.y;

                if (this.player.overlap(this.target)) {
                    this.hud = "WINNER";
                    this.capture.stop();
                    p.noLoop();
                    lvlNumber=5;
                } else {
                    this.hud = "Tackle the fingerattack"
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
