document.addEventListener('DOMContentLoaded', function() {
    const minusButton = document.querySelector('.quantity-btn.minus');
    const plusButton = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');
    const minQuantity = 1;
    const maxQuantity = 99;

    // Cập nhật trạng thái nút
    function updateButtons() {
        const currentValue = parseInt(quantityInput.value);
        minusButton.disabled = currentValue <= minQuantity;
        plusButton.disabled = currentValue >= maxQuantity;
    }

    // Xử lý sự kiện click nút giảm
    minusButton.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > minQuantity) {
            quantityInput.value = currentValue - 1;
            updateButtons();
        }
    });

    // Xử lý sự kiện click nút tăng
    plusButton.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < maxQuantity) {
            quantityInput.value = currentValue + 1;
            updateButtons();
        }
    });

    // Xử lý sự kiện nhập trực tiếp vào input
    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        
        // Kiểm tra và điều chỉnh giá trị nếu cần
        if (isNaN(value) || value < minQuantity) {
            value = minQuantity;
        } else if (value > maxQuantity) {
            value = maxQuantity;
        }
        
        quantityInput.value = value;
        updateButtons();
    });

    //xử lý người dùng nhập trực tiếp
    quantityInput.addEventListener('keydown', (e) => {
        e.preventDefault();
    });

    // Khởi tạo trạng thái ban đầu
    updateButtons();
});