class Lvl3 {
    constructor() {
        this.spriteSheet;
        this.catAnimation;
        this.cnv;
        this.player;
        this.target;
        this.sketch;
        this.setup();
    }

    setup() {
        this.sketch = (p) => {

            p.preload = () =>{
                this.spriteSheet = p.loadSpriteSheet('assets/characters/nyan_sprite.png',400,280,4);
                this.catAnimation = p.loadAnimation(this.spriteSheet);
            };

            p.setup = () => {
                p.createCanvas(1000,1000);
            };

            p.draw = () => {
                p.clear();
                //animate the sprite sheet
                p.animation(this.catAnimation,200,150);
            }

        };


    }

}
