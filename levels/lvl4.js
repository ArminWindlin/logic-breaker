class Lvl4 {
    constructor() {
        this.capture;
        this.x = 100;
        this.y = 100;
        this.speed = 3;
        this.cnv;
        this.hud = "reach the red target";
        this.player;
        this.target;
        this.sketch;
        this.setup();
        this.fingerPoint;
        this.fingerHole;
    }


    setup() {
        this.sketch = (p) => {



            p.setup = () => {
                p.createCanvas(1000,1000);
                this.capture = p.createCapture(p.DILATE);
                this.capture.size(320,.240);
                this.fingerPoint = p.loadImage('assets/img/emoji_pointingFinger.png');
                this.fingerHole = p.loadImage('assets/img/emoji_fingerhole.png');

                this.cnv = p.createCanvas(600, 600);
                this.player = p.createSprite(this.x, this.y, 40, 40);
                this.player.addImage("pointingFinger",this.fingerPoint);
                this.player.shapeColor = p.color(0, 0, 255);
                this.target = p.createSprite(500, 400, 20, 20);
                this.target.addImage("fingerHole",this.fingerHole);
            };

            p.draw = () => {
                p.background(255);
                p.image(this.capture,0,0,800,500);
                p.filter('GRAY');
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
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
