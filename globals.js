//Levels
let lvl;
let lvlNumber = 0;
let lvlCheck = -1;
let score = 0;

//Tensorflow
let tensorConfig = false;
let tensorControl = false;
let tensorConfigVisible = false;

//Audioplayer
let audioIsPlayed = true;
let audioTracks = ['assets/sound/nyanCat.mp3','assets/sound/rickRoll.mp3','assets/sound/noCopyright.mp3']
let currentTrack = 0;

//Speechrecognition
let speechControlOn = false;
let myRec = new p5.SpeechRec();
