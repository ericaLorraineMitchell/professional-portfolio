const navSlide = () => {
  const lines = document.querySelector(".lines");
  const nav = document.querySelector(".nav-links");

//Nav toggle
  lines.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
