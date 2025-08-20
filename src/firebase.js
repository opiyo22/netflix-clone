import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCdxUw5sevneo4LwKzlUIxiLNuwAxCf-Ms",
  authDomain: "netflix-clone-df8ba.firebaseapp.com",
  projectId: "netflix-clone-df8ba",
  storageBucket: "netflix-clone-df8ba.firebasestorage.app",
  messagingSenderId: "716151186018",
  appId: "1:716151186018:web:b5baeffaae34c53156273b",
  measurementId: "G-3WNRZZ0S29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(""));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(""));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signOut, signUp, logout };
