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
