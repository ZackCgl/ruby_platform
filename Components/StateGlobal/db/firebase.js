import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_SECRET,
  authDomain: "ruby-8742f.firebaseapp.com",
  projectId: "ruby-8742f",
  storageBucket: "ruby-8742f.appspot.com",
  messagingSenderId: "326839463915",
  appId: "1:326839463915:web:c7bafef845b725ec2773ae",
  measurementId: "G-X6L72MDTEQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export const storage = getStorage(firebaseApp);
  export default db
