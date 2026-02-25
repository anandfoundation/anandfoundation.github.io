document.addEventListener("click", function (e) {

  const toggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (!toggle || !navbar) return;

  if (toggle.contains(e.target)) {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
      toggle.innerHTML = '<span class="hamburger"></span> X बंद करा';
    } else {
      toggle.innerHTML = '<span class="hamburger"></span> ☰ मुख्य सूची';
    }

  }

});
