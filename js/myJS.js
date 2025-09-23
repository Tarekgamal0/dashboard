let sidebar = document.getElementById("sidebar-id");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-small");
  if (localStorage.getItem("sidebarIsSmall") === "yes") localStorage.setItem("sidebarIsSmall", "no");
  else localStorage.setItem("sidebarIsSmall", "yes");
});

if (localStorage.getItem("sidebarIsSmall") === "yes") {
  sidebar.classList.add("sidebar-small");
}
