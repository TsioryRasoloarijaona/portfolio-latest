const drawerToggle = document.getElementById("drawer-toggle");
const drawerMenu = document.getElementById("drawer-menu");
const drawerClose = document.getElementById("drawer-close");
drawerToggle?.addEventListener("click", () => {
  drawerMenu.classList.remove("translate-x-full");
});
drawerClose?.addEventListener("click", () => {
  drawerMenu.classList.add("translate-x-full");
});
// Optional: close drawer on outside click
window.addEventListener("click", (e) => {
  if (
    !drawerMenu.contains(e.target) &&
    !drawerToggle.contains(e.target) &&
    !drawerMenu.classList.contains("translate-x-full")
  ) {
    drawerMenu.classList.add("translate-x-full");
  }
});
