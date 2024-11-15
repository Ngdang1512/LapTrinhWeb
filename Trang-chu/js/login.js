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
                window.location.href = 'user-info.html';
            } else {
                alert('Mật khẩu không đúng!');
                window.location.href = 'login.html';
            }
        } else {
            alert('Tên đăng nhập không tồn tại!');
            window.location.href = 'login.html';
        }
    }
}

document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Giả sử bạn đã xác thực người dùng thành công
    const username = document.querySelector('.form-input').value; // Lấy tên đăng nhập từ input
    localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
    localStorage.setItem('username', username); // Lưu tên đăng nhập (tuỳ chọn)

    window.location.href = 'user-info.html';
});