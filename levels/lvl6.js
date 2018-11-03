class Lvl6 {
    constructor() {
        this.player;
        this.target;
        this.sketch;
        this.setup();
        this.rickRoll;

    }


    setup() {
        this.sketch = (p) => {

            p.setup = () => {
                p.createCanvas(1000,1000);
                this.capture.size(320,.240);
                this.rickRoll = p.createVideo('assets/video/NeverGonna.mp4');

            };

            p.draw = () => {

                p.background(255);

            };

            p.vidLoad = ()=>{
                this.rickRoll.play();
            }

        };


    }

}
