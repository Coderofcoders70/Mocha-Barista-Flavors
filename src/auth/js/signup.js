const signUpForm = document.getElementById('signup-form');

signUpForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    try{
        const userCredential = await firebase.createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await firebase.setDoc(firebase.doc(db, "users", user.uid), {
            name,
            email,
            createdAt: new Date()
        });
    
        alert("Sign Up Successfully!!");
        window.location.href = "/src/app/index.html";
    }

    catch(err){
        alert(err.message);
    }
});