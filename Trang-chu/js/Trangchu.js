'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    checkLoginStatus();
    setupLogoutButton();
});

function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));
    
    console.log('Login Status:', isLoggedIn);
    console.log('User Data:', userData);

    const userInfo = document.getElementById('user-info');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const userNameElement = document.getElementById('user-name');

    if (isLoggedIn && userData) {
        // Người dùng đã đăng nhập
        userInfo.style.display = 'block';
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        if (userNameElement) {
            userNameElement.textContent = userData.username;
        }
        console.log('User is logged in:', userData.username);
    } else {
        // Người dùng chưa đăng nhập
        userInfo.style.display = 'none';
        loginButton.style.display = 'inline-block';
        registerButton.style.display = 'inline-block';
        console.log('User is not logged in');
    }
}

function setupLogoutButton() {
    const logoutButton = document.querySelector('.user-menu a:last-child');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
}

function handleLogout(event) {
    event.preventDefault();
    // Xóa thông tin đăng nhập
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('loggedInUser');
    console.log('User logged out');
    
    // Cập nhật lại giao diện
    checkLoginStatus();
    
    // Chuyển về trang chủ hoặc trang đăng nhập
    window.location.href = 'Trangchu.html';
}