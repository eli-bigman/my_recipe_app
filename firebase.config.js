import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBWIF-UI3xLWf8sB9EdA5G_Rth04Es0Kxw",
    authDomain: "recipeappg17.firebaseapp.com",
    projectId: "recipeappg17",
    storageBucket: "recipeappg17.appspot.com",
    messagingSenderId: "694141498972",
    appId: "1:694141498972:web:16016cbd6b2f671f369899",
    measurementId: "G-TVKVT4QRJC"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };
