document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const profileMenu = document.getElementById('profileMenu');
    const loginMenu = document.getElementById('loginMenu');
    const logoutButton = document.getElementById('logoutButton');
    const uploadProfilePicture = document.getElementById('uploadProfilePicture');
    const profilePicture = document.getElementById('profilePicture');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');

    let isLoggedIn = false; // Placeholder for actual authentication logic

    if (isLoggedIn) {
        loginMenu.classList.add('d-none');
        profileMenu.classList.remove('d-none');
    } else {
        loginMenu.classList.remove('d-none');
        profileMenu.classList.add('d-none');
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // Tambahkan logika autentikasi di sini
            alert('Login berhasil dengan email: ' + email);
            window.location.href = 'dashboard.html'; // Redirect ke dashboard setelah login berhasil
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // Tambahkan logika pendaftaran di sini
            alert('Registrasi berhasil dengan email: ' + email);
            window.location.href = 'login.html'; // Redirect ke halaman login setelah registrasi berhasil
        });
    }

    logoutButton.addEventListener('click', function() {
        // Tambahkan logika logout di sini
        alert('Logout berhasil');
        window.location.href = 'login.html'; // Redirect ke halaman login setelah logout berhasil
    });

    uploadProfilePicture.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            profilePicture.src = e.target.result;
            // Simpan foto profil yang baru di server atau local storage
            alert('Foto profil berhasil diubah');
        };

        reader.readAsDataURL(file);
    });
});
gsap.from("header", { duration: 1, y: -50, opacity: 0 });
gsap.from("nav ul li", { duration: 0.5, y: 30, opacity: 0, stagger: 0.2 });
gsap.from("main section", { duration: 1, y: 50, opacity: 0, stagger: 0.3 });

document.addEventListener('DOMContentLoaded', function() {
    // Semua logika JavaScript untuk login, logout, dan profil sama seperti sebelumnya
});

