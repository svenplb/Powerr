import React from "react";
import AppRoutes from "./Components/AppRoutes";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjHbhBZbH-odqYn0fXuRHFpQdD2t8X_X0",
  authDomain: "powerr-6a858.firebaseapp.com",
  projectId: "powerr-6a858",
  storageBucket: "powerr-6a858.appspot.com",
  messagingSenderId: "314207896981",
  appId: "1:314207896981:web:c32437f0b3b1b9b594229c",
  measurementId: "G-MCMK1F6MVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
