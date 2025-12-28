import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAk8Nil5-EprxtMF8mJtHe32jv4uXGXvFo",
  authDomain: "mocha-barista.firebaseapp.com",
  projectId: "mocha-barista",
  storageBucket: "mocha-barista.firebasestorage.app",
  messagingSenderId: "386743139725",
  appId: "1:386743139725:web:d5f43124cc9534efc611c4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let resetPassForm = document.getElementById('resetPassword-form');

resetPassForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();

  try{
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent!");
    window.location.href = "login.html";
  }
  catch(error){
    alert(error.message);
  }

});
