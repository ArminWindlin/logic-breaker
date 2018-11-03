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

function sendToFirebase() {
    let scoreDB = database.ref('scores');

    let data = {
        player: document.getElementById('input_score').value,
        score: antiCheatError
    };

    let scoreEntry = scoreDB.push(data, finished);
    console.log('Firebase generated key: ' + scoreEntry.key);

    function finished(error) {
        if (error) {
            console.log('DB error: ' + error);
        }else{
            console.log('Successful score save!')
        }
    }
    document.getElementById('input_score').setAttribute('style','display: hidden');
    document.getElementById('button_submit').setAttribute('style','display: hidden');
}

function openSubmit(){
    document.getElementById('input_score').setAttribute('style','display: inline-block');
    document.getElementById('button_submit').setAttribute('style','display: inline-block');
}