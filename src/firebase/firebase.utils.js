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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth
    const createAt = new Date();

    try{
    await userRef.set({
      displayName, 
      email,
      createAt,
      ...additionalData //spreading data
    })
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }
  //console.log(userRef)

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
