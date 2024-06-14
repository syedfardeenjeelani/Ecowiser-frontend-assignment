import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyBaE5FEz4vE8Hi7mxCwvlrX5baxO_QGemU",
  // authDomain: "newnotekeeper-9b08d.firebaseapp.com",
  // projectId: "newnotekeeper-9b08d",
  // storageBucket: "newnotekeeper-9b08d.appspot.com",
  // messagingSenderId: "1823032767",
  // appId: "1:1823032767:web:da2357116452db08214d0a",
  // measurementId: "G-45LT3YPHRX",
    // apiKey: "AIzaSyCFzN7bdWgm03rIOtuL7dzgNkgQwK8ThQU",
    // authDomain: "nootkeeper-be400.firebaseapp.com",
    // projectId: "nootkeeper-be400",
    // storageBucket: "nootkeeper-be400.appspot.com",
    // messagingSenderId: "88618604218",
    // appId: "1:88618604218:web:fdba17c99500779bfa9483",
    // measurementId: "G-3EP7MY7F39",
   apiKey: "AIzaSyD_JC6rOgGT-J06mCmdfCqlP25mQhgGslo",
  authDomain: "notekeeper3-b9ec7.firebaseapp.com",
  projectId: "notekeeper3-b9ec7",
  storageBucket: "notekeeper3-b9ec7.appspot.com",
  messagingSenderId: "962688532963",
  appId: "1:962688532963:web:2ecf685faf941f04d060d6",
  measurementId: "G-YQGJ2EJ7XR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
