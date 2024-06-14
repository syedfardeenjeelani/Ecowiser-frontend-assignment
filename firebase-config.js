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
    apiKey: "AIzaSyCFzN7bdWgm03rIOtuL7dzgNkgQwK8ThQU",
    authDomain: "nootkeeper-be400.firebaseapp.com",
    projectId: "nootkeeper-be400",
    storageBucket: "nootkeeper-be400.appspot.com",
    messagingSenderId: "88618604218",
    appId: "1:88618604218:web:fdba17c99500779bfa9483",
    measurementId: "G-3EP7MY7F39",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
