import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF4Cm3fwt3ELCgZmr_nvONDyhM-FCBaoY",
  authDomain: "ruby-8742f.firebaseapp.com",
  projectId: "ruby-8742f",
  storageBucket: "ruby-8742f.appspot.com",
  messagingSenderId: "326839463915",
  appId: "1:326839463915:web:c7bafef845b725ec2773ae",
  measurementId: "G-X6L72MDTEQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export const storage = getStorage(firebaseApp);
  export { auth };
  export default db
