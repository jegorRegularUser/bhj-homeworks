const rotatorCases = document.querySelectorAll(".rotator__case");

const changeSlide = () => {
  const activeSlide = document.querySelector(".rotator__case_active");
  activeSlide.classList.remove("rotator__case_active");

  let nextIndex = Array.from(rotatorCases).indexOf(activeSlide) + 1;
  if (nextIndex >= rotatorCases.length) {
    nextIndex = 0;
  }
  const nextSlide = rotatorCases[nextIndex];

  nextSlide.classList.add("rotator__case_active");
  updateSlideStyles(nextSlide);
};

const updateSlideStyles = (slide) => {
  const speed = slide.getAttribute("data-speed") || 1000;
  const color = slide.getAttribute("data-color") || "inherit";

  slide.style.animationDuration = `${speed}ms`;
  slide.style.color = color;
};

setInterval(changeSlide, 1000);
