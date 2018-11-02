let start = new Start();
let lvl1 = new LvL1();

let currentLvl = new Start();

function setLvl() {
    switch (lvl) {
        case 0:
            currentLvl = new Start();
            break;
        case 1:
            currentLvl = new LvL1();
            break;
        default:
            currentLvl = new Start();
    }
};

function setup() {
    currentLvl.setup();
}

function draw() {
    currentLvl.draw();
}


// System
let lvlCheck = lvl;
setInterval(system, 1000);

function system() {
    if (lvlCheck !== lvl) {
        noCanvas();
        setup();
        setLvl();
    }
}

