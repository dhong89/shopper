import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

///createUserProfile Document explanation check seciont 7 lesson 91. 

export const createUserProfileDocument = async( userAuth, additionalData ) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();

  objectsToAdd.forEach( (object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI( title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
} 

console.log(convertCollectionsSnapshotToMap)

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
