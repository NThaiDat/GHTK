let inputFirstName = document.getElementById("inputFirstName");
let inputLastName = document.getElementById("inputLastName");
let inputUserName = document.getElementById("inputUserName");
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let inputConfirmPassword = document.getElementById("inputPassConfirm");

function checkRegister() {
    if (inputFirstName.value == "") {
        inputFirstName.style.border = "1px solid red";
    } else {
        if (inputFirstName.value.match("^[a-zA-Z]+$")) {
            inputFirstName.style.border = "1px solid #bbb";
        } else {
            inputFirstName.style.border = "1px solid red";
        }
    }
    if (inputLastName.value == "") {
        inputLastName.style.border = "1px solid red";
    } else {
        if (inputLastName.value.match("^[a-zA-Z]+$")) {
            inputLastName.style.border = "1px solid #bbb";
        } else {
            inputLastName.style.border = "1px solid red";
        }
    }
    if (inputUserName.value == "") {
        inputUserName.style.border = "1px solid red";
    } else {
        if (inputUserName.value.match("^[a-zA-Z]+$")) {
            inputUserName.style.border = "1px solid #bbb";
        } else {
            inputUserName.style.border = "1px solid red";
        }
    }
    if (inputEmail.value == "") {
        inputEmail.style.border = "1px solid red";
    } else {
        if (inputEmail.value.match("(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")) {
            inputEmail.style.border = "1px solid #bbb";
        } else {
            inputEmail.style.border = "1px solid red";
        }
    }
    if (inputPassword.value == "") {
        inputPassword.style.border = "1px solid red";
    } else {
        if (inputPassword.value.match("^[A-Za-z0-9]+$")) {
            inputPassword.style.border = "1px solid #bbb";
        } else {
            inputPassword.style.border = "1px solid red";
        }
    }
    if (inputConfirmPassword.value == "") {
        inputConfirmPassword.style.border = "1px solid red";
    } else {
        if (inputConfirmPassword.value === inputPassword.value) {
            inputConfirmPassword.style.border = "1px solid #bbb";
        } else {
            inputConfirmPassword.style.border = "1px solid red";
        }
    }
}
