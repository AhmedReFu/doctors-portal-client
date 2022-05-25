// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXsf33RAAwFXwcTNgXgCoRHdgrFv1JEr4",
    authDomain: "doctors-portal-dc1cc.firebaseapp.com",
    projectId: "doctors-portal-dc1cc",
    storageBucket: "doctors-portal-dc1cc.appspot.com",
    messagingSenderId: "764463334248",
    appId: "1:764463334248:web:23abf9501a363ce840ccdd",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;