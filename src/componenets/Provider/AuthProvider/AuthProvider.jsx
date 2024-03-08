import { createContext, useEffect, useState } from "react";

import  {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from  "firebase/auth";
import app from "../../../Firebase/firebaseConfig";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const  githubProvider = new GithubAuthProvider()
export  const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic();
const [user , setUser] = useState([]);
const [loading , setLoading ] = useState(true)
// Create user
const createUser = (email , password) =>{
 setLoading(true);
 return  createUserWithEmailAndPassword(auth , email ,password)
}
// signIn 
const signIn = (email , password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth , email , password)
}
// logout 
const logout = (email , password ) => {
    setLoading(true);
    return signOut(auth)
}
// google 
const googleUser = (email , password) =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
const githubUser = (email , password) => {
    setLoading(true);
    return signInWithPopup(auth , githubProvider)
}
const updateUserProfile = (name , photo) =>{
    return  updateProfile(auth.currentUser ,{
        displayName : name ,  photoURL : photo
    
    })
    
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser);
        if(currentUser){
            // get token store cilent  
            const userInfo = {email : currentUser.email}
            axiosPublic.post("/jwt" ,  userInfo )
            .then(res =>{
                console.log(res.data);
                if(res.data.token){
                    localStorage.setItem("Access-Token" , res.data.token)
                }
            })
            
        }
        else{
            // TODO: remove  token (if token stored in the client  side locaStorage , cashing , in memeory )
                  localStorage.removeItem("Access-Token" , res.data.token)
        }
        setLoading(false)
    })
    return () =>{
       return unSubscribe();
    }
}, [])
 const authInfo = {
        user ,
       createUser,
       signIn,
       googleUser,
       githubUser,
       signOut, 
       updateUserProfile,
       logout,
       loading,
       
 }   
    return (
        <AuthContext.Provider  value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;