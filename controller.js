function switchControls() {
    if (tensorControl) {
        tensorControl = !tensorControl;
        resetLvl();
        document.getElementById('controlType').innerHTML = 'Controller: Keyboard';
    } else {
        if (localStorage.motionSet === 'true') {
            tensorControl = !tensorControl;
            resetLvl();
            document.getElementById('controlType').innerHTML = 'Controller: Motion';
        } else {
            alert('Configure motion controller first!')
        }
    }
}

function openTensorConfig() {
    if (!tensorConfig) {
        removeGame();
        let tc = document.createElement('IFRAME');
        tc.setAttribute('id', 'tensorControl');
        tc.setAttribute('src', 'tensorControl/tensorControl.html');
        document.getElementById('tensorContainer').appendChild(tc);
        tensorConfig = true;
        tensorConfigVisible = true;
        document.getElementById('button_hideConfig').setAttribute('style', 'display: inline-block');
    } else {
        toggleTensorConfig();
    }
}

function toggleTensorConfig() {
    if (tensorConfigVisible) {
        document.getElementById('tensorControl').setAttribute('style', 'visibility: hidden');
        setGame();
    }
    else {
        document.getElementById('tensorControl').setAttribute('style', 'visibility: visible');
        removeGame();
    }
    tensorConfigVisible = !tensorConfigVisible;
}


function toggleSound() {
    if (audioIsPlayed) {
        document.getElementById("audioPlayer").pause();
        audioIsPlayed = false;
    } else {
        //set audiotrack
        if (currentTrack + 1 < audioTracks.length) {
            document.getElementById("audioPlayer").src = audioTracks[currentTrack + 1];
            currentTrack++;
            console.log("audio Tracks array size is: " + audioTracks.length);
            console.log("next track is: " + currentTrack);
        } else {
            currentTrack = 0;
            document.getElementById("audioPlayer").src = audioTracks[currentTrack];
        }
        console.log("setup is done")
        document.getElementById("audioPlayer").play();
        audioIsPlayed = true;
        console.log("audioIsPlayed = true now")
    }
}

    function updateScore(s) {
        score += s;
        document.getElementById('score').innerHTML = 'Score: ' + score;
    }


