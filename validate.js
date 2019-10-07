const name = document.getElementById('name');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const signupForm = document.getElementById('signupForm');
const psw2 = document.getElementById('psw2');
const errorElement = document.getElementById('error');
const matchName = document.getElementById('matchName');
const matchEmail = document.getElementById('matchEmail');
const matchPassword = document.getElementById('matchPassword');
const confirmPassword = document.getElementById('confirmPassword');
const signupbutton = document.querySelector('signupbutton');
let valid = true;

function validateFunction() {
  
    //submitForm();
    var passwordFormat=  /^[A-Za-z]\w{7,14}$/; //password must be between 7 to 14  characters, and first character must be a letter  
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
    
    if (name.value === "" || name.value == null) {
        matchName.className = "wrongInput";
        matchName.innerHTML = "Username can't be blank";
        valid = false;
    }
    else {
        document.getElementById("matchName").style.display = "none";
        valid = true;
    }
    
    if (emailFormat.test(email.value) == false) {
        matchEmail.className = "wrongInput";
        matchEmail.innerHTML = "Incorrect email format";
        valid = false;
    }

    else {
        document.getElementById("matchEmail").style.display = "none";
        valid = true;
    }

    if (passwordFormat.test(psw.value) == false) {
        matchPassword.className = "wrongInput";
        matchPassword.innerHTML = "password should be between 7 to 14  characters, and first character must be a letter ";
        valid = false;
    }

    else {
        document.getElementById("matchPassword").style.display = "none";
        valid = true;
    }

    if (psw2.value != psw.value) {
        
        confirmPassword.className = "wrongInput" 
        confirmPassword.innerHTML = "password does not match"
        valid = false;
       
    }
    else {
        document.getElementById("confirmPassword").style.display = "none";
        valid = true;
    }
    
}

function submitForm() {
    signupbutton.addEventListener(submit, function() {
        if (valid = true) {
            return true;
        }
        return false;
    })
}


