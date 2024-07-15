const quantityControls = document.querySelectorAll(".product__quantity-control");
quantityControls.forEach(control => {
  control.addEventListener("click", e => {
    const productQuantityValue = e.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");

    let quantity = +productQuantityValue.textContent;
  
    if (e.target.classList.contains("product__quantity-control_inc")) {
      quantity++;
    } else {
      if (quantity > 1) {
        quantity--;
      }
    }
    productQuantityValue.textContent = quantity;
  });
});

const addToCartButtons = document.querySelectorAll(".product__add");
const cartProductsContainer = document.querySelector(".cart__products");

addToCartButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    const product = e.target.closest(".product");

    const productId = product.dataset.id;
    const quantity = +product.querySelector(".product__quantity-value").textContent;

    const cartProducts = Array.from(document.getElementsByClassName("cart__product"));

    const productInCart = cartProducts.find(cartProduct => cartProduct.dataset.id === productId);
    if (productInCart) {
      const cartProductCountElement = productInCart.querySelector(".cart__product-count");
      const currentCount = parseInt(cartProductCountElement.textContent);
      cartProductCountElement.textContent = currentCount + quantity;
    } else {
      const productImageElement = product.querySelector(".product__image");
      const productImage = productImageElement ? productImageElement.src : "";

      cartProductsContainer.innerHTML += `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${quantity}</div>
        </div>
      `;
    }
  });
});
