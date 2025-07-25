// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ08OTqyfgo2qaAEcTyTrxGC-DDU4PGmc",
  authDomain: "pelis-b5726.firebaseapp.com",
  projectId: "pelis-b5726",
  storageBucket: "pelis-b5726.firebasestorage.app",
  messagingSenderId: "1045897298729",
  appId: "1:1045897298729:web:f7efee51d17f0496482d38"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
