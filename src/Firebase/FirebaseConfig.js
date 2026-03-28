import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANgO5n17N7Ljbv6dCkKqTIxgJtAk9LvHk",
  authDomain: "glasses-authentication-con9-2.firebaseapp.com",
  projectId: "glasses-authentication-con9-2",
  storageBucket: "glasses-authentication-con9-2.firebasestorage.app",
  messagingSenderId: "146537509306",
  appId: "1:146537509306:web:3bd865d3b44d8d14b52d83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
