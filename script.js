const btn = document.getElementById("contactBtn");
const menu = document.getElementById("contactDropdown");

if(btn && menu){
  btn.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".contact-menu")) {
      menu.style.display = "none";
    }
  });
}