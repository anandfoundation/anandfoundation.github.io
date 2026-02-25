document.addEventListener("click", function (e) {

  if (e.target && e.target.id === "menuToggle") {

    const navbar = document.getElementById("navbar");

    if (navbar) {
      navbar.classList.toggle("active");

      if (navbar.classList.contains("active")) {
        e.target.textContent = "X बंद करा";
      } else {
        e.target.textContent = "☰ मुख्य सूची";
      }
    }
  }

});
