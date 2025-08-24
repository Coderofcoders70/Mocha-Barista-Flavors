const firebaseConfig = {
  apiKey: "AIzaSyA_tP2IgCDOAE5oeha1-Y5wTb4DxfDIUgs",
  authDomain: "mocha-barista-data.firebaseapp.com",
  projectId: "mocha-barista-data",
  storageBucket: "mocha-barista-data.firebasestorage.app",
  messagingSenderId: "896153017640",
  appId: "1:896153017640:web:013278d4033a7a239ac41d",
  measurementId: "G-GP1ZXWZBEW"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);
const db = firebase.getFirestore(app)