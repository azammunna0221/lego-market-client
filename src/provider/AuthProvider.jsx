import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    //create user
    const createUser = (email, password) => {
        setLoading (true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Sign In
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //sign out
    const logOut = () =>{
        return signOut(auth);
    }

    // Observe
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        //mount
        return ()=>{
            return unsubscribed();
        }
    },[])

const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut
};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;