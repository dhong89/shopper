import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyClZz2dANeZ5Ah-yd25rUq0uP4Jvn1JRe4",
  authDomain: "shopper-3626b.firebaseapp.com",
  databaseURL: "https://shopper-3626b.firebaseio.com",
  projectId: "shopper-3626b",
  storageBucket: "shopper-3626b.appspot.com",
  messagingSenderId: "630662300529",
  appId: "1:630662300529:web:7ce8aa2b02b130a15b6cd0",
  measurementId: "G-9DCRY6JW2E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 