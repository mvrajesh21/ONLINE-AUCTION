import { useEffect, useState } from "react";
import './ap1.css';
import PhoneVerify from "./PhoneVerify";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDrs0JvNniZlMoZ--rnslGL5_5asfxv-Bc",
    authDomain: "bidx-415415.firebaseapp.com",
    databaseURL: "https://bidx-415415-default-rtdb.firebaseio.com",
    projectId: "bidx-415415",
    storageBucket: "bidx-415415.appspot.com",
    messagingSenderId: "798355898443",
    appId: "1:798355898443:web:a41b0db8b851760b770dce",
    measurementId: "G-7KDRRDGPE0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => unSubscriber();
  }, []);

  return (
    <div className="Ap1b">
      <h1>Verify Phone Number with OTP</h1>
      <PhoneVerify auth={firebase.auth()}></PhoneVerify>
    </div>
  );
}

export default App;