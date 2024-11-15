// products.js

// Lấy các sản phẩm từ trang
const products = [
    {
        name: "Yonex Astrox 88D Pro",
        brand: "Yonex",
        price: 4000000,
        image: "image/yonex-astrox88.jpg",
    },
    {
        name: "Lining Axforce 100",
        brand: "Lining",
        price: 3800000,
        image: "image/axf100.jpg",
    },
    // Thêm các sản phẩm khác ở đây
];

// Hàm lọc sản phẩm
function filterProducts() {
    const selectedBrands = Array.from(document.querySelectorAll('.filter-container input[type="checkbox"]:checked'))
        .map(input => input.nextElementSibling.textContent.trim());
    const selectedPrice = document.querySelector('.filter-container input[type="radio"]:checked');

    // Lọc sản phẩm theo thương hiệu
    const filteredProducts = products.filter(product => {
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const priceMatch = !selectedPrice || (selectedPrice.value === "Dưới 1 triệu" && product.price < 1000000) ||
                           (selectedPrice.value === "1 - 3 triệu" && product.price >= 1000000 && product.price <= 3000000) ||
                           (selectedPrice.value === "Trên 3 triệu" && product.price > 3000000);
        return brandMatch && priceMatch;
    });

    // Cập nhật giao diện với sản phẩm đã lọc
    updateProductDisplay(filteredProducts);
}

// Hàm cập nhật hiển thị sản phẩm
function updateProductDisplay(filteredProducts) {
    const productList = document.querySelector('.products-list');
    productList.innerHTML = ''; // Xóa danh sách hiện tại

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h4 class="product-title">${product.name}</h4>
            <p>Giá: ${product.price.toLocaleString()} VND</p>
        `;
        productList.appendChild(productElement);
    });
}

// Lắng nghe sự kiện cho nút áp dụng bộ lọc
document.querySelector('.apply-filters').addEventListener('click', filterProducts);
