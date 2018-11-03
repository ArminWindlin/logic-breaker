// System
setInterval(system, 100);

function system() {
    if (lvlCheck !== lvlNumber) {
        lvl ? lvl.p ? lvl.p.noLoop(): '' : '';
        document.getElementById('gameContainer').innerHTML = '';
        setLvl();
        if (!tensorConfigVisible)
            new p5(lvl.sketch, window.document.getElementById('gameContainer'));
        lvlCheck = lvlNumber;
        document.getElementById('lvl').innerHTML = 'Level: ' + lvlNumber;
    }
}

function resetLvl() {
    lvl ? lvl.p ? lvl.p.noLoop(): '' : '';
    document.getElementById('gameContainer').innerHTML = '';
    setLvl();
    if (!tensorConfigVisible)
        new p5(lvl.sketch, window.document.getElementById('gameContainer'));
}

function removeGame() {
    lvl ? lvl.p ? lvl.p.noLoop(): '' : '';
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
        case 3:
            lvl = new Lvl3();
            break;
        case 4:
            lvl = new Lvl4();
            break;
        case 5:
            lvl = new Lvl5();
            break;
        case 6:
            lvl = new Lvl6();
            break;
        case 7:
            lvl = new Lvl7();
            break;
        default:
            lvl = new Start();
    }
}