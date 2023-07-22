import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyBWIF-UI3xLWf8sB9EdA5G_Rth04Es0Kxw",
    authDomain: "recipeappg17.firebaseapp.com",
    projectId: "recipeappg17",
    storageBucket: "recipeappg17.appspot.com",
    messagingSenderId: "694141498972",
    appId: "1:694141498972:web:16016cbd6b2f671f369899",
    measurementId: "G-TVKVT4QRJC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, db, storage };