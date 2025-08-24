const loginForm = document.getElementById('login-form');

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    try{
        await firebase.signInWithEmailAndPassword(auth, email, password);
        alert("Login Successfully!!");
        window.location.href = "/src/app/index.html";
    }

    catch(err){
        alert(err.message);
    }
});