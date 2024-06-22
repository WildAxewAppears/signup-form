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
    divLogo = document.querySelector(".logo")
    
    if (root.className === 'dark') {
        root.classList.replace("dark","light")

        while(divLogo.firstChild){
            divLogo.removeChild(divLogo.firstChild);
        }
        let darkImage = document.createElement("img")
        darkImage.src = "img/lighsideLogo.png"
        darkImage.height = 150
        darkImage.width = 150
        divLogo.appendChild(darkImage)

        let logoH1 = document.createElement("h1")
        logoH1.classList.add("logo-title")
        logoH1.textContent = "New Jedi Order"
        divLogo.appendChild(logoH1)
       
        buttonTheme.textContent = "Dark side"
      } else {
            root.classList.replace("light","dark")
            while(divLogo.firstChild){
                divLogo.removeChild(divLogo.firstChild);
            }
            let darkImage = document.createElement("img")
            darkImage.src = "img/darksideLogo.png"
            darkImage.height = 150
            darkImage.width = 150
            divLogo.appendChild(darkImage)

            let logoH1 = document.createElement("h1")
            logoH1.classList.add("logo-title")
            logoH1.textContent = "Sith Order"
            divLogo.appendChild(logoH1)
            
            
            buttonTheme.textContent = "Light side"

      }
     
})