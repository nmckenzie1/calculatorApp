import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD-Gza4C3jxtcJ4FN_XG9hEC0Xstx33gbo",
  authDomain: "calculator-efed9.firebaseapp.com",
  projectId: "calculator-efed9",
  storageBucket: "calculator-efed9.appspot.com",
  messagingSenderId: "802293690286",
  appId: "1:802293690286:web:5b1a950c62be5cc6e4e23f",
  measurementId: "G-Y2VBBT21R3"
};
  
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();