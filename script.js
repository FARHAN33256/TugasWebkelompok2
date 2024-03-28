document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Contoh validasi sederhana
    if (username === 'admin' && password === 'password') {
        // Redirect atau tindakan selanjutnya setelah login berhasil
        alert('Login berhasil!');
    } else {
        document.getElementById('error-message').textContent = 'Username atau password salah.';
    }
});
