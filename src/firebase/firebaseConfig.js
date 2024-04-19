import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhwOz8iuCHQPKwdDoNM2mfAQAbWb5TSm4",
  authDomain: "my-kitchen-c6be.firebaseapp.com",
  projectId: "my-kitchen-c6be",
  storageBucket: "my-kitchen-c6be.appspot.com",
  messagingSenderId: "758307142493",
  appId: "1:758307142493:web:21f53c68e112c4c2bcc6b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth

export const auth = getAuth();
