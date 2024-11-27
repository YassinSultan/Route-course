var form = document.querySelector("form");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var alertDanger = document.querySelector("#alertDanger");

var users = JSON.parse(localStorage.getItem("users"));
function login() {
    var email = document.querySelector("#emailInput").value;
    var password = document.querySelector("#passwordInput").value;
    if (checkUser(email, password)) {
        window.location.href = 'home.html';
    }
};
function startSession(user) {
    sessionStorage.setItem("isLogin", true);
    sessionStorage.setItem("userName", user.name);
    sessionStorage.setItem("userEmail", user.email);
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    login();
});


function checkUser(email, password) {
    if (!email || !password) {
        dangerAlert("All inputs is required.");
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            startSession(users[i]);
            return true;
        }
    }
    dangerAlert('Incorrect email or password.');
    return false;
}

function dangerAlert(message) {
    alertDanger.innerHTML = message;
    alertDanger.classList.add('active');
    setTimeout(function () {
        alertDanger.classList.remove('active');
    }, 3000);
}

