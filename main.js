// System
setInterval(system, 100);

function system() {
    if (lvlCheck !== lvlNumber) {
        lvl ? lvl.p.noLoop() : '';
        document.getElementById('gameContainer').innerHTML = '';
        setLvl();
        if (!tensorConfigVisible)
            new p5(lvl.sketch, window.document.getElementById('gameContainer'));
        lvlCheck = lvlNumber;
        document.getElementById('lvl').innerHTML = 'Level: ' + lvlNumber;
    }
}

function resetLvl() {
    lvl ? lvl.p.noLoop() : '';
    document.getElementById('gameContainer').innerHTML = '';
    setLvl();
    new p5(lvl.sketch, window.document.getElementById('gameContainer'));
}

function removeGame() {
    lvl ? lvl.p.noLoop() : '';
    document.getElementById('gameContainer').innerHTML = '';
}

function setGame() {
    new p5(lvl.sketch, window.document.getElementById('gameContainer'));
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
        case 5:
            lvl = new Lvl5();
            break;
        default:
            lvl = new Start();
    }
}