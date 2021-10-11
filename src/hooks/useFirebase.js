import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";
import initializeFirebaseApp from "../Firebase/firebase.initialize";
initializeFirebaseApp();


const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider) 
        
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    // Observe User State Change or Not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            
            }
          });
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut

    }
}

export default useFirebase;