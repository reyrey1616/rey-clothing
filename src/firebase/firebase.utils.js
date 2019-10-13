import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwW6tx1679iF-FaG0vwpRrFrrlCvTPeAo",
    authDomain: "rey-db.firebaseapp.com",
    databaseURL: "https://rey-db.firebaseio.com",
    projectId: "rey-db",
    storageBucket: "",
    messagingSenderId: "889573638784",
    appId: "1:889573638784:web:84f53c9b351529d8"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    if(!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
   
  export default firebase;
