import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ4_sFNv9qE-mQT0VNi1jhXW-m0s_rNB8",
  authDomain: "film-4beb5.firebaseapp.com",
  projectId: "film-4beb5",
  storageBucket: "film-4beb5.appspot.com",
  messagingSenderId: "294722114568",
  appId: "1:294722114568:web:975c35b559a8cdbd5e2dbd",
  measurementId: "G-9QNR52N89F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    alert(error.message);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    alert(error.message);
  }
};
