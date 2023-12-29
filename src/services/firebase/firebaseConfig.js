import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt6fd5V8y3jNuvDRbrJUk-O8eNKotUhcs",
  authDomain: "proyectoreactcoderbariecarlos.firebaseapp.com",
  projectId: "proyectoreactcoderbariecarlos",
  storageBucket: "proyectoreactcoderbariecarlos.appspot.com",
  messagingSenderId: "482425443893",
  appId: "1:482425443893:web:421112a8d4af1f4132437c"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const firebaseConnection = firestore;
