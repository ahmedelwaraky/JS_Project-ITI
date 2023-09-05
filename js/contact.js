let form = document.getElementById("myForm")

let username = document.getElementById("name")
let alertname = document.getElementById("alertName")

let useremail = document.getElementById("email")
let alertemail = document.getElementById("alertEmail")

let userpassword = document.getElementById("password")
let alertpassword = document.getElementById("alertPassword")


function addInfo(){

    // Username validation
    if (username.value.length < 2) {
        alertName.style.display = "block"
    } else {
        alertName.style.display = "none"
    }


    // Email validation 
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    if (email.value.length < 1) {
        alertEmail.style.display = "block"
    } else if (!validateEmail(email.value)) {
        alertEmail.innerHTML = "Invalid email address";
        alertEmail.style.display = "block";
    } else {
        alertEmail.style.display = "none"
    }

    // Password validation 
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
    if (password.value.length <= 8) {
        alertPassword.style.display = "block"
    } else if (!passwordRegex.test(password.value)) {
        alertPassword.innerHTML = "Invalid Password";
        alertPassword.style.display = "block";
    } else {
        alertPassword.style.display = "none"
    }

}