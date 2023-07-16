import firebase from "firebase";
/* 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8IJ82jtdZyE2sKMG7iaZiKKjme8GKPUs",
  authDomain: "challenge-6280d.firebaseapp.com",
  projectId: "challenge-6280d",
  storageBucket: "challenge-6280d.appspot.com",
  messagingSenderId: "367829989902",
  appId: "1:367829989902:web:39c76da50616a219b09a5f",
  measurementId: "G-L16XC97J6G",
};
 */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbFhUM02u7tEzX0DyKQgwNnVi-Aly_hi8",
  authDomain: "clone-2-b1a87.firebaseapp.com",
  projectId: "clone-2-b1a87",
  storageBucket: "clone-2-b1a87.appspot.com",
  messagingSenderId: "289908258184",
  appId: "1:289908258184:web:2f85b0f89dd44576e8f63d",
  measurementId: "G-SXRS478YJC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };