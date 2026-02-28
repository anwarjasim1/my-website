function sayHello(){
  alert("مرحبا! يمكنك التواصل معي عبر واتساب 😊");
}

const btn = document.getElementById("contactBtn");
const menu = document.getElementById("contactDropdown");

btn.addEventListener("click", () => {
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// إغلاق القائمة إذا ضغط المستخدم خارجها
document.addEventListener("click", (e) => {
  if (!e.target.closest(".contact-menu")) {
    menu.style.display = "none";
  }
});