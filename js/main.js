function toggleMenu() {
  const navbar = document.getElementById("navbar");
  const toggle = document.querySelector(".menu-toggle");

  if (!navbar || !toggle) return;

  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    toggle.innerHTML = '<span class="close-icon">✕</span> बंद करा';
  } else {
    toggle.innerHTML = '<span class="hamburger"></span> मुख्य सूची';
  }
}
function switchToMarathi(event) {
  event.preventDefault();

  const currentPath = window.location.pathname;
  const marathiPath = currentPath.replace(/^\/en/, "") || "/";

  window.location.href = marathiPath;
}
function switchToEnglish(event) {
  event.preventDefault();

  const currentPath = window.location.pathname;
  const englishPath = "/en" + (currentPath === "/" ? "/" : currentPath);

  window.location.href = englishPath;
}
