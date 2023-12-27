// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6fd5V8y3jNuvDRbrJUk-O8eNKotUhcs",
  authDomain: "proyectoreactcoderbariecarlos.firebaseapp.com",
  projectId: "proyectoreactcoderbariecarlos",
  storageBucket: "proyectoreactcoderbariecarlos.appspot.com",
  messagingSenderId: "482425443893",
  appId: "1:482425443893:web:421112a8d4af1f4132437c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = () => app