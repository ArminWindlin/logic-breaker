// Initialize Firebase
let config = {
    apiKey: "AIzaSyDQXdorsMaTA4CiNQkv43uSbhvaT4fjoyQ",
    authDomain: "logic-breaker.firebaseapp.com",
    databaseURL: "https://logic-breaker.firebaseio.com",
    projectId: "logic-breaker",
    storageBucket: "",
    messagingSenderId: "858609175822"
};
firebase.initializeApp(config);
database = firebase.database();

getData();

function getData() {
    let ref = database.ref('scores');
    ref.once('value', gotData, errorData);
}

function gotData(results) {
    let data = results.val();
    let keys = Object.keys(data);
    let scores = [];
    for (let key of keys) {
        let record = data[key];
        scores.push({
            player: record.player,
            score: record.score
        })
    }
    scores.sort((a,b) => b.score - a.score);
    for(let i = 0; i < scores.length;i++){
        let element = document.createElement('div');
        let p = document.createElement('div');
        let s = document.createElement('div');
        element.setAttribute('class','score');
        p.setAttribute('class','right');
        s.setAttribute('class','left');
        p.innerHTML = scores[i].player + ': ';
        s.innerHTML = scores[i].score;
        element.appendChild(p);
        element.appendChild(s);
        document.getElementById('scoreContainer').appendChild(element);
    }
}

function errorData(error) {
    console.log('DB ERROR: ' + error);
}