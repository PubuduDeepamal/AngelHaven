import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBANo6uLaoGsboc9ex5R2HAOh1xHP3r9RI",
  // authDomain: "angelhaven-a68a5.firebaseapp.com",
  // databaseURL: "https://angelhaven-a68a5-default-rtdb.firebaseio.com",
  // projectId: "angelhaven-a68a5",
  // storageBucket: "angelhaven-a68a5.appspot.com",
  // messagingSenderId: "129958052805",
  // appId: "1:129958052805:web:a225b7f40d21fedb30c1ac"

  apiKey: "AIzaSyCZ2p_YqstaC-nrTJ09cf-1_6NDhN5PRf0",
  authDomain: "fypdatabse-5b71b.firebaseapp.com",
  projectId: "fypdatabse-5b71b",
  storageBucket: "fypdatabse-5b71b.appspot.com",
  messagingSenderId: "702554805091",
  appId: "1:702554805091:web:bfb8bcd5d9b27111297956"
};

const firbaseApp = initializeApp(firebaseConfig);

// export default firbaseApp

// init firestore service
const db = getFirestore()
export default db
