'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    checkLoginStatus();
    setupLogoutButton();
});

function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('loggedInUser'));
    
    console.log('Login Status:', isLoggedIn);
    console.log('User Data:', userData);

    const userInfo = document.getElementById('user-info');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const userNameElement = document.getElementById('user-name');
    const logoutButton = document.getElementById('Logout');
    const usericon = document.getElementById('user-icon')

    if (isLoggedIn && userData) {
        // Người dùng đã đăng nhập
        userInfo.style.display = 'block';
        logoutButton.style.display = 'inline-block';
        usericon.style.display = 'inline-block'
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        if (userNameElement) {
            userNameElement.textContent = userData.username;
        }
        console.log('User is logged in:', userData.username);
    } else {
        // Người dùng chưa đăng nhập
        userInfo.style.display = 'none';
        logoutButton.style.display = 'none';
        usericon.style.display = 'none'
        loginButton.style.display = 'inline-block';
        registerButton.style.display = 'inline-block';
        console.log('User is not logged in');
    }
}

function logout() {
    // Xóa thông tin đăng nhập
    sessionStorage.removeItem('isLoggedIn');

    checkLoginStatus();

    window.location.href = 'TrangChu.html';
}