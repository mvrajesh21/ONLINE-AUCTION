import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const GoogleSignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider); // Using redirect for a seamless mobile experience
  };

  return (
    <button type="button" className="login-with-google-btn" >
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
