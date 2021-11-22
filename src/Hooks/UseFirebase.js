import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/Firebase.init";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken, signOut} from 'firebase/auth';

initializeFirebase();

const useFirebase = () => {

    const [user, setuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setAuthError('');
            const newUser = { email, displayName : name};
            setuser(newUser);
            //save to databae
            saveUserOnDatabase(email, name, 'POST');
            //send name to firebase afeter creatation
            updateProfile(auth.currentUser, {
                displayName : name
            })
            .then( () => {
                setAuthError('')
            })
            .catch(error => {
                setAuthError(error.message)
            })
            history.push('/')
        })
        .catch(error => {
            setAuthError(error.message)
        })
        .finally( () => setIsLoading(false))
    }

    const logInUser = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            
            const destination = location?.state?.from || '/';
            history.replace(destination);
            
            setAuthError('')
        })
        .catch(error => {
            setAuthError(error.message)
        })
        .finally( () => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            //save to datebase
            saveUserOnDatabase(user.email, user.displayName, 'PUT')

            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('')
        })
        .catch(error => {
            setAuthError(error.message)
        })
        .finally( () => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setuser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
            }
            else{
                setuser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    },[])
    //add admin just who is admin 
    useEffect(() => {
        fetch(`https://glacial-stream-07919.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {

        })
        .finally( () => setIsLoading(false))
    }

    const saveUserOnDatabase = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://glacial-stream-07919.herokuapp.com/users', {
            method : method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        registerUser,
        isLoading,
        admin,
        logOut,
        logInUser,
        authError,
        signInWithGoogle,
        token
    }
}

export default useFirebase;