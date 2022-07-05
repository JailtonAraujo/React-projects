import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0B9hu53xaaNJyCbkjlTB2AXqLgf8UQRo",
  authDomain: "miniblog-17335.firebaseapp.com",
  projectId: "miniblog-17335",
  storageBucket: "miniblog-17335.appspot.com",
  messagingSenderId: "180780842560",
  appId: "1:180780842560:web:62639d55633135b4f329a5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};