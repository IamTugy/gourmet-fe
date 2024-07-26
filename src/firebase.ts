// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMe0PgUiZ_H32eg3OpL0646w0fg-Nc7es",
  authDomain: "ai-gourmet.firebaseapp.com",
  projectId: "ai-gourmet",
  storageBucket: "ai-gourmet.appspot.com",
  messagingSenderId: "1029045266925",
  appId: "1:1029045266925:web:bf454e08ca2261f9dadfe4",
  measurementId: "G-1D0J1BTM4G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
