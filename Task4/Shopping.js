// Hamburger Menu Working
const hamburger = document.getElementById("hamburger");
const navOptions = document.getElementById("navOptions");
hamburger.addEventListener("click", (event) => {
    navOptions.classList.toggle("show");
    event.stopPropagation();
});

document.addEventListener("click", () => {
    if (navOptions.classList.contains("show")) {
        navOptions.classList.remove("show");
    }
});

// Prevent The Nav Menu From Hiding When Clicking Inside Of Cart Panel
navOptions.addEventListener("click", (event) => {
    event.stopPropagation();
});



// ! Fetching Data And Showing In Cards Working 

const smartphonesSection = document.querySelector("#smartphones .productList");
const laptopsSection = document.querySelector("#laptops .productList");
const mobileAccessoriesSection = document.querySelector("#mobile-accessories .productList");
const kitchenAccessoriesSection = document.querySelector("#kitchen-accessories .productList");
const womensBagsSection = document.querySelector("#womens-bags .productList");
const fragrancesSection = document.querySelector("#fragrances .productList");
const productCardTemplate = document.getElementById("productCardTemplate");

// API URLs To Fetch Data
const smartphonesAPI = "https://dummyjson.com/products/category/smartphones";
const laptopsAPI = "https://dummyjson.com/products/category/laptops";
const mobileAccessoriesAPI ="https://dummyjson.com/products/category/mobile-accessories";
const kitchenAccessoriesAPI ="https://dummyjson.com/products/category/kitchen-accessories";
const womensBagsAPI = "https://dummyjson.com/products/category/womens-bags";
const fragrancesAPI = "https://dummyjson.com/products/category/fragrances";


// Cart Functionality
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const totalCost = document.getElementById("totalCost");
const cartBadge = document.getElementById("cartBadge"); 

let cart = [];

// Loading Cart From LocalStorage On Page Load
document.addEventListener("DOMContentLoaded", () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart); 
        updateCartUI();
    }
});

// Save The Cart To LocalStorage
function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Toggle Cart Visibility
cartIcon.addEventListener("click", () => {
    cartPanel.classList.toggle("hidden");
    cartPanel.classList.toggle("visible");
});

// Close The Cart 
closeCart.addEventListener("click", () => {
    cartPanel.classList.add("hidden");
    cartPanel.classList.remove("visible");
});

// Function To Create A Product Card Using The Template Given In HTML
async function createProductCard(product) {
    const imageUrl = product.thumbnail || placeholderImage;

    // Cloning Of Template
    const templateContent = productCardTemplate.content.cloneNode(true);
    const productCard = templateContent.querySelector(".productCard");

    // Circulate The Template With Product Data
    productCard.querySelector(".productImage").src = imageUrl;
    productCard.querySelector(".productImage").alt = product.title;
    productCard.querySelector(".productTitle").textContent = product.title;
    productCard.querySelector(".productPrice").textContent = `$${product.price}`;

    productCard.setAttribute("data-id", product.id);
    productCard.setAttribute("data-title", product.title);
    productCard.setAttribute("data-price", product.price);

    // "Add to Cart" Listener To The Button
    const addToCartButton = productCard.querySelector(".addToCart");
    addToCartButton.addEventListener("click", () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
        });
    });

    return productCard;
}



// Function To Fetch And Display Products
function fetchProducts(apiUrl, section) {
    fetch(apiUrl)
        .then((response) => response.json())
        .then(async (data) => {
            const productElements = await Promise.all(
                data.products.map(createProductCard)
            );
            productElements.forEach((productCard) => section.appendChild(productCard));
        })
        .catch((error) => {
            console.error(`Error fetching products from ${apiUrl}:`, error);
            section.innerHTML = `<p class="error">Failed to load products.</p>`;
        });
}

// Fetch Data On Page Load
fetchProducts(smartphonesAPI, smartphonesSection);
fetchProducts(laptopsAPI, laptopsSection);
fetchProducts(mobileAccessoriesAPI, mobileAccessoriesSection);
fetchProducts(kitchenAccessoriesAPI, kitchenAccessoriesSection);
fetchProducts(womensBagsAPI, womensBagsSection);
fetchProducts(fragrancesAPI, fragrancesSection);



// Add Product To Cart
function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCartToLocalStorage(); 
    updateCartUI();
}

// Function to update the cart 
function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.quantity;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.title}</td>
            <td>$${item.price}</td>
            <td>
            <div class="updateBox">
                <button class="decrement">-</button>
                ${item.quantity}
                <button class="increment">+</button>
            </div>
            </td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove">X</button></td>
        `;

        cartItems.appendChild(row);

        // Increment Button
        row.querySelector(".increment").addEventListener("click", () => {
            item.quantity += 1;
            saveCartToLocalStorage(); // Save To LocalStorage
            updateCartUI();
        });

        // Decrement Button
        row.querySelector(".decrement").addEventListener("click", () => {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart = cart.filter((cartItem) => cartItem.id !== item.id);
            }
            saveCartToLocalStorage(); // Save To LocalStorage
            updateCartUI();
        });

        // Remove Button
row.querySelector(".remove").addEventListener("click", () => {
    // Add Fade-Out Animation Class
    row.classList.add("cart-item-removed");

    // Wait Until Animation Ends
    setTimeout(() => {
        cart = cart.filter((cartItem) => cartItem.id !== item.id);
        saveCartToLocalStorage();
        updateCartUI();
    }, 300); 
});

});

    totalCost.textContent = total.toFixed(2);

    // Update Cart Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? "block" : "none";

    saveCartToLocalStorage();
}


// Empty Cart Button Working
const emptyCartButton = document.querySelector('.emptyCart'); 
emptyCartButton.addEventListener('click', function () {
    cart = [];
    localStorage.removeItem('cart');
    cartItems.innerHTML = '';
    totalCost.textContent = '0.00';
    cartBadge.textContent = '0';
    cartBadge.style.display = 'none';
});
