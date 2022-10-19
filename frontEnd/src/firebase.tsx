// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAGA_CG3dr_v2O0KHBebFQAc4pBHf2Jnvw",
  authDomain: "beauty-bodega.firebaseapp.com",
  projectId: "beauty-bodega",
  storageBucket: "beauty-bodega.appspot.com",
  messagingSenderId: "241475750645",
  appId: "1:241475750645:web:1b7c857586c4f50a64d3bc",
  measurementId: "G-248FC68M7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);