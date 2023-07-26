const formUser = document.getElementById("formUser");
const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const enviar = document.getElementById("enviar");

passWord.setAttribute("disabled", "");
enviar.setAttribute("disabled", "");


formUser.addEventListener("submit", (event) => {
    event.preventDefault();

    location.reload();
})

userName.addEventListener("keyup", (event) => {
    const patternValue = /\s+\B/g

    event.target.value = event.target.value.replace(patternValue, "");

    if (event.target.value.length > 7) {
        event.target.classList.remove("invalid");
        event.target.classList.add("valid");
        passWord.removeAttribute("disabled");
    } else {
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");
        enviar.setAttribute("disabled", "");
        passWord.classList.remove("valid");
        passWord.classList.add("invalid");
        passWord.setAttribute("disabled", "");
        passWord.value = "";
        const fildForm = document.querySelector("fieldset");
        const checkArea = document.querySelector(".checkArea");
        fildForm.classList.remove("valid");
        fildForm.classList.add("invalid");
        checkArea.classList.remove("valid");
        checkArea.classList.add("invalid");
        const spanCheck = document.querySelectorAll(".checkPattern");
        spanCheck.forEach(elemento => elemento.classList.remove("checkPatternValid"));
    }
})

passWord.addEventListener("keyup", (event) => {
    const patternValue = /\s+\B/g
    event.target.value = event.target.value.replace(patternValue, "");
    let passWordPattern = checkPassWordPattern(event.target);
    const fildForm = document.querySelector("fieldset");
    const checkArea = document.querySelector(".checkArea");

    if (passWordPattern === true) {
        event.target.classList.remove("invalid");
        event.target.classList.add("valid");
        enviar.removeAttribute("disabled");
        fildForm.classList.remove("invalid");
        fildForm.classList.add("valid");
        checkArea.classList.remove("invalid");
        checkArea.classList.add("valid");
    } else {
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");
        enviar.setAttribute("disabled", "");
        fildForm.classList.remove("valid");
        fildForm.classList.add("invalid");
        checkArea.classList.remove("valid");
        checkArea.classList.add("invalid");
    }
})

function checkPassWordPattern(userPassWord) {
    let check = false;
    let passNumber = false
    let passSimbol = false;
    let passUpperCase = false;
    let passLength = false;

    const spanCheck = document.querySelectorAll(".checkPattern");

    const numberPattern = /\d+/g;
    const simbolPattern = /[!@#$%¨&*]+/g;
    const upperCasePattern = /[A-ZÇ]+/g;

    if (userPassWord.value.length > 7 && userPassWord.value.length < 16) {
        passLength = true;
        spanCheck[3].classList.add("checkPatternValid");
    } else {
        passLength = false;
        spanCheck[3].classList.remove("checkPatternValid");
    }

    if (userPassWord.value.match(numberPattern)) {
        passNumber = true;
        spanCheck[0].classList.add("checkPatternValid");
    } else {
        passNumber = false;
        spanCheck[0].classList.remove("checkPatternValid");
    }

    if (userPassWord.value.match(simbolPattern)) {
        passSimbol = true;
        spanCheck[1].classList.add("checkPatternValid");
    } else {
        passSimbol = false;
        spanCheck[1].classList.remove("checkPatternValid");
    }

    if (userPassWord.value.match(upperCasePattern)) {
        passUpperCase = true;
        spanCheck[2].classList.add("checkPatternValid");
    } else {
        passUpperCase = false;
        spanCheck[2].classList.remove("checkPatternValid");
    }

    if (passLength === true && passNumber === passLength && passSimbol === passLength && passUpperCase === passLength) {
        check = true;
    } else {
        check = false;
    }

    return check;
}