import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyB9yw2WfT3e5_eQvawp4k-tGQOwi3tvfJc",
  authDomain: "devops-website-64534.firebaseapp.com",
  projectId: "devops-website-64534",
  storageBucket: "devops-website-64534.appspot.com",
  messagingSenderId: "894801815232",
  appId: "1:894801815232:web:978b548df0ace5d536af25",
  measurementId: "G-ZTKHP0TKZH",
});

export const auth = getAuth();
export const myapp = app;
