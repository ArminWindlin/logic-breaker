class Lvl2 {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.speed = 3;
        this.cnv;
        this.player;
        this.target;
        this.barriers;
        this.barrier1;
        this.barrier2;

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
                this.target.shapeColor = p.color(255, 0, 0);

                /*this.barriers = new p.Group();
                this.barrier1 = p.createSprite(450, 300, 300, 10);
                this.barrier1.shapeColor = p.color(255);
                this.barrier2 = p.createSprite(300, 450, 10, 300);
                this.barrier2.shapeColor = p.color(255);
                this.barriers.add(this.barrier1);
                this.barriers.add(this.barrier2);*/
            };

            p.draw = () => {
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                p.background(0, 0, 0);

                this.player.position.x = this.x;
                this.player.position.y = this.y;


                if (this.player.overlap(this.target)) {
                    lvlNumber = 0;
                }

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

                p.drawSprites();
            }

        };


    }

}
