document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('form-login');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    setupPasswordToggle();
});

function setupPasswordToggle() {
    const eye = document.getElementById('eye');
    const passwordInput = document.querySelector('input[type="password"]');

    if (eye && passwordInput) {
        eye.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eye.innerHTML = '<i class="far fa-eye-slash"></i>';
            } else {
                passwordInput.type = 'password';
                eye.innerHTML = '<i class="far fa-eye"></i>';
            }
        });
    }
}

function handleLogin(event) {
    event.preventDefault();
    const usernameInput = document.querySelector('input[placeholder="Tên đăng nhập"]');
    const passwordInput = document.querySelector('input[placeholder="Mật khẩu"]');

    if (usernameInput && passwordInput) {
        const storedUser = localStorage.getItem(usernameInput.value);
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.password === passwordInput.value) {
                // Lưu trạng thái đăng nhập
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                
                console.log('Đăng nhập thành công:', user);
                alert('Đăng nhập thành công!');
                window.location.href = 'Trangchu.html';
            } else {
                alert('Mật khẩu không đúng!');
            }
        } else {
            alert('Tên đăng nhập không tồn tại!');
        }
    }
}