const header = document.querySelector(".site-header");
const toggle = header.querySelector(".menu-toggle");
const navigation = header.querySelector(".site-navigation");
const mobile = window.matchMedia("(max-width: 700px)");

function setMenuOpen(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navigation.classList.toggle("is-open", open);
}

header.classList.add("menu-ready");
toggle.hidden = false;
toggle.addEventListener("click", () => {
  setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
});
header.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    toggle.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false);
    toggle.focus();
  }
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
mobile.addEventListener("change", () => setMenuOpen(false));
