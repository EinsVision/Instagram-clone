import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIMtgYIGH4OkuAsQ88pe2hsOledXOEgIw",
  authDomain: "instagram-clone-d34a7.firebaseapp.com",
  projectId: "instagram-clone-d34a7",
  storageBucket: "instagram-clone-d34a7.appspot.com",
  messagingSenderId: "950588628778",
  appId: "1:950588628778:web:3060a744b1526bba3ec853"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };