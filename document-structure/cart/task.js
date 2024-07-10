const quantityControls = document.querySelectorAll(
  ".product__quantity-control"
);

quantityControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    const productQuantityValue = event.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    let quantity = parseInt(productQuantityValue.textContent);

    if (event.target.classList.contains("product__quantity-control_inc")) {
      quantity++;
    } else if (
      event.target.classList.contains("product__quantity-control_dec")
    ) {
      if (quantity > 1) {
        quantity--;
      }
    }

    productQuantityValue.textContent = quantity;
  });
});

const addToCartButtons = document.querySelectorAll(".product__add");

const cartProductsContainer = document.querySelector(".cart__products");

const cart = {};

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const productId = product.dataset.id;
    const productQuantityValue = product.querySelector(
      ".product__quantity-value"
    );
    const quantity = parseInt(productQuantityValue.textContent);
    const productImage = product.querySelector(".product__image").src;

    if (cart[productId]) {
      cart[productId].count += quantity;
    } else {
      cart[productId] = {
        id: productId,
        image: productImage,
        count: quantity,
      };
    }

    updateCartView();

    const cartImage = cartProductsContainer.querySelector(
      ".cart__product-image"
    );
    const imageClone = productImage.cloneNode(true);
    imageClone.classList.add("product-shadow");
    document.body.appendChild(imageClone);

    const productRect = productImage.getBoundingClientRect();
    const cartRect = cartImage
      ? cartImage.getBoundingClientRect()
      : { left: 0, top: 0 };

    const steps = 20;
    const deltaX = (cartRect.left - productRect.left) / steps;
    const deltaY = (cartRect.top - productRect.top) / steps;

    let currentStep = 0;
    const animationInterval = setInterval(() => {
      imageClone.style.left = `${productRect.left + deltaX * currentStep}px`;
      imageClone.style.top = `${productRect.top + deltaY * currentStep}px`;
      currentStep++;
      if (currentStep >= steps) {
        clearInterval(animationInterval);
        document.body.removeChild(imageClone);
      }
    }, 20);
  });
});

const updateCartView = () => {
  cartProductsContainer.innerHTML = "";

  for (const productId in cart) {
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("cart__product");
    cartProduct.dataset.id = cart[productId].id;

    const cartProductImage = document.createElement("img");
    cartProductImage.classList.add("cart__product-image");
    cartProductImage.src = cart[productId].image;

    const cartProductCount = document.createElement("div");
    cartProductCount.classList.add("cart__product-count");
    cartProductCount.textContent = cart[productId].count;

    cartProduct.appendChild(cartProductImage);
    cartProduct.appendChild(cartProductCount);
    cartProductsContainer.appendChild(cartProduct);
  }

  const cartContainer = document.querySelector(".cart");
  const cartTitle = document.querySelector(".cart__title");
  if (Object.keys(cart).length > 0) {
    cartContainer.style.display = "block";
    cartTitle.style.display = "block";
  } else {
    cartContainer.style.display = "none";
    cartTitle.style.display = "none";
  }
};

window.addEventListener("load", () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  if (savedCart) {
    Object.keys(savedCart).forEach((productId) => {
      cart[productId] = savedCart[productId];
    });
    updateCartView();
  }
});

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

cartProductsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".cart__product")) {
    const cartProduct = event.target.closest(".cart__product");
    const productId = cartProduct.dataset.id;

    delete cart[productId];

    updateCartView();
  }
});
