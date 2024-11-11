document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('form-register');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

function handleRegister(event) {
    event.preventDefault();
    const usernameInput = document.querySelector('input[placeholder="Tên đăng nhập"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const passwordInput = document.querySelector('input[placeholder="Mật khẩu"]');

    if (usernameInput && emailInput && passwordInput) {
        // Kiểm tra xem username đã tồn tại chưa
        if (localStorage.getItem(usernameInput.value)) {
            alert('Tên đăng nhập đã tồn tại!');
            return;
        }

        const user = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        // Lưu thông tin người dùng
        localStorage.setItem(user.username, JSON.stringify(user));
        localStorage.setItem('loggedInUser',JSON.stringify(user));

        alert('Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.');
        window.location.href = 'login.html';
    }
}