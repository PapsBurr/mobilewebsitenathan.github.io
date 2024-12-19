function navShowHide() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
  var coverBox = document.getElementById("cover-box");
  if (coverBox.style.display === "flex") {
    coverBox.style.display = "none";
  } else {
    coverBox.style.display = "flex";
  }
}