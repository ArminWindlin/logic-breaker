class End {
    constructor() {
        this.p;
        this.cnv;
        this.winner;
        this.sketch;
        this.setup();
    }

    setup() {
        this.sketch = (p) => {
            p.setup = () => {
                this.p = p;
                this.cnv = p.createCanvas(600, 600);
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                this.cnv.style('box-shadow', '0 0 30px 10px red');
                p.background(0);

                this.winner = p.createSprite(300, 600, 200, 50);
                this.winner.addImage(p.loadImage('assets/winner.png'));

            };

            p.draw = () => {
                this.winner.position.y--;
                p.drawSprites();
            }
        };
    }
}



