const buttonSubmit = document.querySelector("#submit");

const buttonTheme = document.querySelector("#theme");

let root = document.querySelector(".light")

let errorSpan = document.querySelector(".error")

function stupidVerification() {
    let passwordElement = document.querySelector("#password");
    let confirmPasswordElement = document.querySelector("#confirm-password");

    let password = passwordElement.value;
    let confirmPassword = confirmPasswordElement.value;

    let firstName = document.querySelector("#first-name");
    let lastName = document.querySelector("#last-name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");


    if (!firstName.reportValidity() || !lastName.reportValidity() || !email.reportValidity() || !phone.reportValidity()) {
        passwordElement.value = "";
        confirmPasswordElement.value = "";
        return false;
    }

    if (password !== confirmPassword) {
        passwordElement.value = "";
        confirmPasswordElement.value = "";
        errorSpan.style.visibility = "visible"
        return false
    }

    return true;
}

buttonSubmit.addEventListener("click", (e) => {
    if (!stupidVerification()) {
        e.preventDefault();
    }
    else{
    window.alert("Thanks for Signing Up!")}
});

buttonTheme.addEventListener("click", function(){
    
    if (root.className === 'dark') {
        root.classList.replace("dark","light")
       
        buttonTheme.textContent = "Dark side"
      } else {
        root.classList.replace("light","dark")
        buttonTheme.textContent = "Light side"
      }
     
})