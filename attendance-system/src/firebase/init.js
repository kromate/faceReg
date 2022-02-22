
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref  } from "firebase/storage";

const storage = getStorage();

const firebaseApp = initializeApp({
   apiKey: "AIzaSyCJPvMODeO5JuJe_VlUPZ7eF4tEqIoi1L8",
  authDomain: "facereg-809b3.firebaseapp.com",
  databaseURL: "https://facereg-809b3.firebaseio.com",
  projectId: "facereg-809b3",
  storageBucket: "facereg-809b3.appspot.com",
  messagingSenderId: "741914714343",
  appId: "1:741914714343:web:e24f447bb5727bfbd18242",
  measurementId: "G-4JKN2R3DB2"
});

const analytics = getAnalytics(firebaseApp);
export const db = getFirestore();
export const storageRef = ref(storage);

