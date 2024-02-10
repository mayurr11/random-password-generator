const passwordBox = document.querySelector("#password");
const genrateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copybtn");
const alert = document.querySelector("#alert");
    

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + numbers + symbols;

genrateBtn.addEventListener('click', () => {
    let passwordLength = document.querySelector("#passwordLength");
    let length = passwordLength.value;

    if (length === "" || length < 1) {
        length = 6;
        passwordLength.value = "6";
    }

    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
        // return password;
    }

    passwordBox.value = password;
});

const copyPassword = () => {
    if(passwordBox.value.trim() == '') {
        alert.innerHTML = "First Generate password,<br> then copy! 😬";
        alert.style.color = "red";
    } else {
        passwordBox.select();
        document.execCommand('copy');
        alert.textContent = "Password Copied 🤓✅";
        alert.style.color = "green";
    }
}

copyBtn.addEventListener('click', copyPassword);




