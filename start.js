class Start {
    constructor() {
        this.cnv;
        this.start_button;
        this.sketch;
        this.setup();
    }

    setup() {
        this.sketch = (p) => {
            p.setup = () => {
                this.cnv = p.createCanvas(600, 600);
                this.cnv.position((p.windowWidth - p.width) / 2, (p.windowHeight - p.height) / 2);
                p.background(150, 200, 250);

                this.button_start = p.createSprite(245, 290, 200, 50);

                this.button_start.onMousePressed = (e) => {
                    lvlNumber = 1;
                };
            };

            p.draw = () => {
                p.drawSprites();

                p.textSize(32);
                p.text("Logic Breaker", 200, 40);

                p.textSize(20);
                p.text("Start", 250, 300);
            }
        };
    }
}



