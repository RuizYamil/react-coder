import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZWTUrpkBDClamxYNwM9mzF8xwSiXKIh0",
  authDomain: "react-coderhouse-3d31b.firebaseapp.com",
  projectId: "react-coderhouse-3d31b",
  storageBucket: "react-coderhouse-3d31b.appspot.com",
  messagingSenderId: "355141041712",
  appId: "1:355141041712:web:e9f747fc31298364f537f5"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}