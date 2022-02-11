import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from 'firebase/auth'

import { getFirestore , collection, doc , writeBatch } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBsiaa9ME0zS7mbTevSCknbeSW2KzDSDi4",
  authDomain: "crownsmart-9b137.firebaseapp.com",
  projectId: "crownsmart-9b137",
  storageBucket: "crownsmart-9b137.appspot.com",
  messagingSenderId: "484699458257",
  appId: "1:484699458257:web:677e985869b9e5693513f0",
  measurementId: "G-TJ9J2517BC"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

export const firestore = getFirestore();
export const auth = getAuth();

export const addCollectionAndDocuments = async (  collectionKey,objectsToAdd)=>{
  const collectionRef =collection(firestore , collectionKey);
  const batch=writeBatch(firestore);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
}


export const convertCollectionsSnapshotToMap =(collections)=>{
  const transformCollections = collections.docs.map(doc=>{
    const{title , items}=doc.data();
    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      items,
      title
    }

  });
  return transformCollections.reduce((accumulator , collection)=>{
    accumulator[collection.title.toLowerCase()] =collection;
    return accumulator;
  },{})
}




export const  signInWithGoogle=()=> {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(auth, provider)
}


export const login = (email, password)=> {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signup = (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password)
}


export const forgotPassword=(email)=> {
  return sendPasswordResetEmail(auth, email, {
    url: `http://localhost:3000/login`,
  })
}


export const resetPassword = (oobCode, newPassword) => {
  return confirmPasswordReset(auth, oobCode, newPassword)
}


export const logout=() =>{
  return signOut(auth)
}



export default firebase;

