// System
setInterval(system, 100);

function system() {
    if (lvlCheck !== lvlNumber) {
        setLvl();
        document.getElementById('gameContainer').innerHTML = '';
        new p5(lvl.sketch, window.document.getElementById('gameContainer'));
        lvlCheck = lvlNumber;
    }
}


function setLvl() {
    switch (lvlNumber) {
        case 0:
            lvl = new Start();
            break;
        case 1:
            lvl = new Lvl1();
            break;
        case 2:
            lvl = new Lvl2();
            break;
        default:
            lvl = new Start();
    }
}
