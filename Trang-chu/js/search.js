const products = [
    { name: "Vợt cầu lông Yonex Astrox 88D Pro", price: "4,000,000 VND", image: "image/88d.jpg" },
    { name: "Vợt cầu lông Yonex Nanoflare 800", price: "3,500,000 VND", image: "image/nnf800.jpg" },
    { name: "Vợt cầu lông Yonex Arcsaber 11 Pro", price: "4,380,000 VND", image: "image/arc11pro.jpg" },
    { name: "Vợt cầu lông Yonex Duora Z-Strike", price: "3,380,000 VND", image: "image/duorazstrike.jpg" },

    { name: "Vợt cầu lông Lining Axforce 100", price: "3,800,000 VND", image: "image/axf100.jpg" },
    { name: "Vợt cầu lông Lining 3D Calibar 900", price: "3,939,000 VND", image: "image/clb900.jpg" },
    { name: "Vợt cầu lông Lining Halbertec 9000", price: "4,100,000 VND", image: "image/hbt9000.jpg" },
    { name: "Vợt cầu lông Lining Bladex 900 Moon", price: "4,080,000 VND", image: "image/bladex900moon.jpg" },

    { name: "Giày cầu lông Yonex SHB 65z3 Wide", price: "2,450,000 VND", image: "image/65z3.jpg" },
    { name: "Giày cầu lông Yonex 88 Dial 3", price: "2,920,000 VND", image: "image/88dial3.webp" },
    { name: "Giày cầu lông Yonex Power Cushion Comfort Z3", price: "2,950,000 VND", image: "image/comfortZ3.webp" },
    { name: "Giày cầu lông Yonex Aerus Z2 Men 2024", price: "2,689,000 VND", image: "image/aerusZ2.webp" },

    { name: "Giày cầu lông Lining AYAT005-1", price: "2,330,000 VND", image: "image/bladepro.jpg" },
    { name: "Giày cầu lông Lining AYAT003-1", price: "3,000,000 VND", image: "image/ayazt003-1.webp" },
    { name: "Giày cầu lông Lining AYAU005-1", price: "2,990,000 VND", image: "image/ayau005-1.webp" },
    { name: "Giày cầu lông Lining AYZUT015-1", price: "2,150,000 VND", image: "image/ayzu015-1.webp" },

];

function showSuggestions(searchTerm) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';

    if (searchTerm.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredProducts.length > 0) {
        filteredProducts.slice(0, 5).forEach(product => {
            const suggestion = document.createElement('a');
            suggestion.classList.add('suggestion');
            suggestion.href = `product-detail.html?id=${product.id}`;
            
            suggestion.innerHTML = `
                <div class="suggestion-content">
                    <img class="suggestion-image" src="${product.image}" alt="${product.name}">
                    <span title="${product.name}">${product.name}</span>
                </div>
            `;
            
            suggestionsContainer.appendChild(suggestion);
        });
        
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.innerHTML = '<div class="suggestion">Không tìm thấy sản phẩm</div>';
        suggestionsContainer.style.display = 'block';
    }
}

function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    searchResults.innerHTML = '<h3>Kết quả tìm kiếm</h3>';
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length === 0) {
        searchResults.innerHTML += '<p>Không tìm thấy sản phẩm nào.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h4 class="product-title">${product.name}</h4>
                <p>Giá: ${product.price}</p>
            `;
            searchResults.appendChild(productElement);
        });
    }
    
    searchResults.style.display = 'block';
    document.getElementById('suggestions').style.display = 'none';
}

document.getElementById('search-input').addEventListener('input', function() {
    showSuggestions(this.value);
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
        document.getElementById('suggestions').style.display = 'none';
    }
});