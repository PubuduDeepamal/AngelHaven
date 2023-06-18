import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr2T8Etmq_qcUEJ1LzgpRdrKVwwPeobJA",
  authDomain: "angelhaven-3f27b.firebaseapp.com",
  projectId: "angelhaven-3f27b",
  storageBucket: "angelhaven-3f27b.appspot.com",
  messagingSenderId: "191213082500",
  appId: "1:191213082500:web:9f33f6cc781a939a7cefd1",
  measurementId: "G-39S3CLD151"
};

const firbaseApp = initializeApp(firebaseConfig);

export default firbaseApp
