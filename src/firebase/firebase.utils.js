import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = 
    {
        apiKey: "AIzaSyAWTTRSX3_UyrHQz2mcmEVAf0dbl7NsA-I",
        authDomain: "react-store-db-32c1c.firebaseapp.com",
        projectId: "react-store-db-32c1c",
        storageBucket: "react-store-db-32c1c.appspot.com",
        messagingSenderId: "302886692132",
        appId: "1:302886692132:web:5bf5b09ea23247fa0dbfb1",
        measurementId: "G-1EN44M8GBM"
      };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
