var form = document.querySelector("form");
var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var alertDanger = document.querySelector("#alertDanger");

var users = JSON.parse(localStorage.getItem("users")) || [];
form.addEventListener("submit", function (event) {
    event.preventDefault();
    createAccount();
});

function createAccount() {
    if (checkValidate(nameInput) && checkValidate(emailInput) && checkValidate(passwordInput) && checkIfUserInsted()) {
        var user = {
            "name": document.querySelector("#nameInput").value,
            "email": document.querySelector("#emailInput").value,
            "password": document.querySelector("#passwordInput").value,
        };
        pushToLocalStorage(user);
        changerUrl();
        clearInputs();
    }
}
function pushToLocalStorage(data) {
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
}


function checkValidate(e) {
    var regix = {
        "nameInput": /^.{3,}$/,
        "emailInput": /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "passwordInput": /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    };
    if (regix[e.id].test(e.value)) {
        e.classList.remove('is-invalid');
        e.classList.add('is-valid');
        return true;
    }
    else {
        e.classList.add('is-invalid');
        e.classList.remove('is-valid');
        return false;
    }

}
function changerUrl() {
    location.replace('/index.html');
}
function clearInputs() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}
function checkIfUserInsted() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === emailInput.value) {
            alertDanger.innerHTML = "User already exists";
            alertDanger.classList.add('active');
            setTimeout(function () {
                alertDanger.classList.remove('active');
            }, 3000);
            return false;
        }
    }
    return true;
}