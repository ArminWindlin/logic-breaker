class Start {
    constructor() {
        this.cnv;
        this.start_button;
    }

    setup() {
        this.cnv = createCanvas(600, 600);
        this.cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
        background(150, 200, 250);

        this.button_start = createSprite(245, 290, 200, 50);

        this.button_start.onMousePressed = (e) => {
            lvl = 1;
        };
    }

    draw() {
        drawSprites();

        textSize(32);
        text("Logic Breaker", 200, 40);

        textSize(20);
        text("Start", 250, 300);

    }

    delete() {
    }
}



