import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAk8Nil5-EprxtMF8mJtHe32jv4uXGXvFo",
  authDomain: "mocha-barista.firebaseapp.com",
  projectId: "mocha-barista",
  storageBucket: "mocha-barista.firebasestorage.app",
  messagingSenderId: "386743139725",
  appId: "1:386743139725:web:d5f43124cc9534efc611c4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

let mainForm = document.getElementById('signup-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');

let registerUser = (e) => {
      e.preventDefault();

      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (credentials) => {
            let ref = doc(db, "UserAuthList", credentials.user.uid);
            await setDoc(ref, {
                  Username: name.value.trim(),
                  Email: email.value,
                  createdAt: new Date(),
            });

            alert("SignUp Successfully!!");
            window.location.href = "login.html";
      })
      .catch((error) => {
            alert(error.message);
      })
}

mainForm.addEventListener("submit", registerUser);