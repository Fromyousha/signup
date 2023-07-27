// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS_KmJ4qUei54ENPeSqiYMbvzbxwSLdkw",
  authDomain: "sign-up-5033d.firebaseapp.com",
  projectId: "sign-up-5033d",
  storageBucket: "sign-up-5033d.appspot.com",
  messagingSenderId: "198948104959",
  appId: "1:198948104959:web:de2b5cbc62d71aae913aca"
};

var btn=document.getElementById("btn")
btn.addEventListener("click",()=>{

    var email= document.getElementById("email").value
    var password= document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href="./signin.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

})
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();