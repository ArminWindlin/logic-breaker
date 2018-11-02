class LvL1 {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.speed = 3;
        this.cnv;
        this.hud = "reach the red target";
        this.player;
        this.target;
        this.sketch;
        this.setup();
    }

    setup() {
        this.sketch = (p) => {

            p.setup = () => {
                this.cnv = p.createCanvas(600, 600);
                this.player = p.createSprite(this.x, this.y, 40, 40);
                this.player.shapeColor = p.color(0, 0, 255);
                this.target = p.createSprite(500, 400, 20, 20);
                this.target.shapeColor = p.color(255, 0, 0)
            };

            p.draw = () => {
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                p.background(150, 200, 250);
                p.text(this.hud, 100, 20);

                this.player.position.x = this.x;
                this.player.position.y = this.y;

                if (this.player.overlap(this.target)) {
                    this.hud = "WINNER";
                } else {
                    this.hud = "reach the red target";
                }

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

                p.drawSprites();
            }

        };


    }

}
