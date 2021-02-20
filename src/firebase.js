import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBRBlgLt3WgQADVq7ah4jg8_Z2DWgFcnmw",
  authDomain: "calcchallenge-b558b.firebaseapp.com",
  projectId: "calcchallenge-b558b",
  storageBucket: "calcchallenge-b558b.appspot.com",
  messagingSenderId: "50732057822",
  appId: "1:50732057822:web:c08d539603e2bdf3bbee4f",
  measurementId: "G-SMSW63WLVP"
};
  
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();