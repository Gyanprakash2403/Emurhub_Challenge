
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//Initialize Firebase
var config = {
    apiKey: "AIzaSyB82MiCPNJ7iP_JuRf_kylZgjeZarPh0Kw",
    authDomain: "emburhubdb.firebaseapp.com",
    databaseURL: "https://emburhubdb.firebaseio.com",
    projectId: "emburhubdb",
    storageBucket: "emburhubdb.appspot.com",
    messagingSenderId: "1065739065670",
    appId: "1:1065739065670:web:6c982dd9c4476c363d2d47"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 