import React from "react";
// import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// const auth = getAuth();
// const user = auth.currentUser;

export function Login({}) {
    function handleLogIn() {
        console.log("monkey")
      // signInWithPopup(auth, provider)
        // .then((result) => {
        //   // This gives you a Google Access Token. You can use it to access the Google API.
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        //   // The signed-in user info.
        //   const user = result.user;
        //   // ...
        // }).catch((error) => {
        //   // Handle Errors here.
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // The email of the user's account used.
        //   const email = error.customData.email;
        //   // The AuthCredential type that was used.
        //   const credential = GoogleAuthProvider.credentialFromError(error);
        // }); 
    }

  return <button onClick={handleLogIn}>Login</button>;
}
