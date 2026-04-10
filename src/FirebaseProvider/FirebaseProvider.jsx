import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [user,setUser]=useState(null)
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
    });
  }, []);

  const allValues = {
    createUser,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
