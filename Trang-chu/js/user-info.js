document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra trạng thái đăng nhập
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        const userData = JSON.parse(localStorage.getItem('loggedInUser'));

        // Kiểm tra xem userData có tồn tại không
        if (userData) {
            const userName = userData.username || '';
            const fullName = userData.name || '';
            const email = userData.email || '';
            const phone = userData.phone  || '';
            const address = userData.address || '';

            // Hiển thị thông tin người dùng
            document.getElementById('customer-name').textContent = fullName;
            document.getElementById('customer-email').textContent = email;
            document.getElementById('customer-phone').textContent = phone;
            document.getElementById('customer-address').textContent = address;

            document.getElementById('user-name-account').textContent = userName;

            // Lưu thông tin mới khi nhấn nút "SỬA THÔNG TIN"
            document.getElementById('edit-button').addEventListener('click', function() {
                document.getElementById('edit-form').style.display = 'block';
                document.getElementById('edit-name').value = fullName;
                document.getElementById('edit-email').value = email;
                document.getElementById('edit-phone').value = phone;
                document.getElementById('edit-address').value = address;
                document.getElementById('edit-birthdate').value = birthdate;
                document.getElementById('edit-gender').value = gender;
            });

            // Lưu thông tin mới khi nhấn nút "Lưu"
            document.getElementById('save-button').addEventListener('click', function() {
                const newUserData = {
                    name: document.getElementById('edit-name').value,
                    email: document.getElementById('edit-email').value,
                    phone: document.getElementById('edit-phone').value,
                    address: document.getElementById('edit-address').value, 
                    birthdate: document.getElementById('edit-birthdate').value,
                    gender: document.getElementById('edit-gender').value
                };

                const newPassword = document.getElementById('edit-password').value;
                const confirmPassword = document.getElementById('edit-password-confirm').value;

                if (newPassword && newPassword === confirmPassword) {
                    // Cập nhật mật khẩu trong userData nếu cần
                    userData.password = newPassword; // Giả sử bạn có trường mật khẩu trong userData
                } else if (newPassword) {
                    alert('Mật khẩu không khớp. Vui lòng kiểm tra lại.');
                    return;
                }

                // Cập nhật với thông tin mới
                localStorage.setItem('loggedInUser', JSON.stringify({...userData, ...newUserData}));

                // Cập nhật giao diện hiển thị thông tin mới
                document.getElementById('customer-name').textContent = newUserData.name;
                document.getElementById('customer-email').textContent = newUserData.email;
                document.getElementById('customer-phone').textContent = newUserData.phone;
                document.getElementById('customer-address').textContent = newUserData.address;
                
                document.getElementById('edit-form').style.display = 'none';
            });

            // Hủy bỏ việc sửa thông tin khi nhấn nút "Hủy"
            document.getElementById('cancel-button').addEventListener('click', function() {
                document.getElementById('edit-form').style.display = 'none';
            });
        }
    } else {
        alert('Bạn cần đăng nhập để xem thông tin!');
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập
    }
});