const resetForm = document.getElementById('resetPassword-form');

resetForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();

    try{
        await firebase.sendPasswordResetEmail(auth, email);
        alert("Password Reset Email Sent!!");
        window.location.href = "/src/app/index.html";
    }

    catch(err){
        alert(err.message);
    }
});