import React from "react";

import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5As75GRklnGsJuvXXZchU8cFJNUEr374",
  authDomain: "spontan-plochberger-info.firebaseapp.com",
  databaseURL: "https://spontan-plochberger-info.firebaseio.com",
  projectId: "spontan-plochberger-info",
  storageBucket: "spontan-plochberger-info.appspot.com",
  messagingSenderId: "624489370720",
  appId: "1:624489370720:web:cc62c5b24209f2208a9f05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function GoogleLoginButton() {
  function handleClick() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then(function (result) {
        console.log(result.user.displayName + " logged in");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return <button onClick={handleClick}>Login with Google</button>;
}

export default GoogleLoginButton;
