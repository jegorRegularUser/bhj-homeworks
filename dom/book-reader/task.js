const fontSizeControls = document.querySelectorAll(".font-size");
const book = document.getElementById("book");

fontSizeControls.forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
    const size = event.target.dataset.size;
    fontSizeControls.forEach((c) => c.classList.remove("font-size_active"));
    e.target.classList.add("font-size_active");
    book.classList.remove("book_fs-small", "book_fs-big");
    if (size === "small") {
      book.classList.add("book_fs-small");
    } else if (size === "big") {
      book.classList.add("book_fs-big");
    }
  });
});

const textColorControls = document.querySelectorAll(
  ".text_color_black, .text_color_gray, .text_color_whitesmoke"
);
textColorControls.forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
    const color = e.target.dataset.textColor;
    textColorControls.forEach((c) => c.classList.remove("color_active"));
    e.target.classList.add("color_active");
    book.classList.remove(
      "book_color-black",
      "book_color-gray",
      "book_color-whitesmoke"
    );
    book.classList.add(`book_color-${color}`);
  });
});

const bgColorControls = document.querySelectorAll(
  ".bg_color_black, .bg_color_gray, .bg_color_white"
);
bgColorControls.forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
    const color = e.target.dataset.bgColor;
    bgColorControls.forEach((c) => c.classList.remove("color_active"));
    e.target.classList.add("color_active");
    book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white");
    book.classList.add(`book_bg-${color}`);
  });
});
