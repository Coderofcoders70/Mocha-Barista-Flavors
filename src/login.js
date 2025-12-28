import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

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

let mainForm = document.getElementById('login-form');
let email = document.getElementById('email');
let password = document.getElementById('password');

let loginUser = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (credentials) => {
        let ref = doc(db, "UserAuthList", credentials.user.uid);
        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
            sessionStorage.setItem("user-info", JSON.stringify({
                Username: docSnap.data().Username,
            }))
            
            alert("Login Sucessfully!!");
            sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
            window.location.href = "index.html";
        }
      })
      .catch((error) => {
            alert(error.message);
      })
}

mainForm.addEventListener("submit", loginUser);