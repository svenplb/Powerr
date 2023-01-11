import React from "react";

import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Auth() {
  function handleClick() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const user = auth.currentUser;
    console.log(user);
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

export default Auth;
