let loginId = document.getElementById("loginId");
let submitForm = document.getElementById("submit");
let  password= document.getElementById("password");
let messsage = document.getElementById("message");
let userName = "rd540032@gmail.com";
let passcode = "356456";
let attempt= 0;
let maxAttempt=2;
submitForm.addEventListener("click" ,function () {
    
    if (userName==loginId.value && passcode==password.value) {
        messsage.textContent="Login Successfull!!";
        message.style.color="green";
        alert("Login Successfull");
        loginId.value="";
        password.value="";
        
    }  
    else{
        attempt++;
        let attemptLeft = maxAttempt-attempt;
        message.textContent=`Incorrect Credentials. Attempt left:${attemptLeft}`
        message.style.color="orange";
        loginId.value="";
password.value="";
        if (attempt>=maxAttempt) {
            messsage.textContent="Too many failed attempts"
            message.style.color="red";
            submitForm.disabled= true;
        }

    }
})
