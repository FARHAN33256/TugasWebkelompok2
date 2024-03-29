document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'arifarhan' && password === '12345') {
        window.location.href = 'kelompok.html';
    } else {
        document.getElementById('error-message').textContent = 'Username atau password salah.';
    }
});
