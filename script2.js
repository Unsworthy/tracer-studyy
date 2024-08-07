document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            alert('Login berhasil dengan email: ' + email);
            window.location.href = 'dashboard.html'; // Melanjutkan ke dashboard setelah login berhasil
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            alert('Registrasi berhasil dengan email: ' + email);
            window.location.href = 'login.html'; // Redirect ke halaman login setelah registrasi berhasil
        });
    }
});
