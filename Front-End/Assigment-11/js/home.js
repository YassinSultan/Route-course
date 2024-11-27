var isLogin = sessionStorage.getItem('isLogin');
if (!isLogin) {
    window.location.href = 'index.html';
}

var logOutbtn = document.getElementById('logOutBtn');
var welcomeMessage = document.getElementById('welcomeMessage');

welcomeMessage.innerHTML = 'Welcome, ' + sessionStorage.getItem('userName') + '!';

logOutbtn.addEventListener('click', function () {
    destroySession();
    window.location.href = 'index.html';
});

function destroySession() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('isLogin');
}

