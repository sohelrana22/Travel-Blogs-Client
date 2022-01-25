import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import FirebaseInit from "../firebase/firebase.init";

FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = (navigate, url) => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate(url);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  const registerUser = (email, password, name, history, url) => {
    setLoading(true);
    setUser({ email: email, displayName: name });
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        saveUserToDb(email, name);
        setAuthError(null);
        // update user porfile with name
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          setUser(result.user);
        });
        history(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        // .
      })
      .finally(() => setLoading(false));
  };
  const LoginUser = (email, password, history, url) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history(url);
        setAuthError(null);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        // .
      })
      .finally(() => setLoading(false));
  };
  const LogOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  const saveUserToDb = (email, displayName) => {
    const newuser = { email, displayName };
    fetch("https://rocky-inlet-47708.herokuapp.com/saveusers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newuser),
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe;

  }, [auth]);
  useEffect(() => {
    axios
      .get(`https://rocky-inlet-47708.herokuapp.com/getAdmin/${user?.email}`)
      .then((result) => {
        setAdmin(result.data.admin);
      });
  }, [user, admin]);
  return {
    googleLogin,
    registerUser,
    LogOut,
    LoginUser,
    user,
    authError,
    admin,
    loading,
  };
};

export default useFirebase;
