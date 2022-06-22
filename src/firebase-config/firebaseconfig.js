import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyB4a_tfEtSDbxCp6n_op0Tuv4WEVZ5uXbY",
  authDomain: "auth-6a564.firebaseapp.com",
  projectId: "auth-6a564",
  storageBucket: "auth-6a564.appspot.com",
  messagingSenderId: "99378578312",
  appId: "1:99378578312:web:e0bdbee5bdffe0e089b03d"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


