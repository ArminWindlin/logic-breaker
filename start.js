class Start {
    constructor() {
        this.p;
        this.cnv;
        this.title;
        this.start_button;
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

                this.title = p.createSprite(300, 50, 200, 50);
                this.title.addImage(p.loadImage('assets/title.png'));

                this.button_start = p.createSprite(300, 300, 200, 50);
                this.button_start.addImage(p.loadImage('assets/button_300_75.png'));

                this.button_start.onMousePressed = (e) => {
                    lvlNumber = 1;
                };
            };

            p.draw = () => {
                p.drawSprites();

                p.textSize(35);
                p.text("Start", 256, 311);
            }
        };
    }
}



