const btn = document.querySelector(".menu-btn");
const nav = document.getElementById("navLinks");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (btn && nav) {
  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}
