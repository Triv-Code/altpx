// --- Desktop Navigation (Show/Hide DIVs)
function openPage(evt, pageName) {
  var i, pageContent, link;
  pageContent = document.getElementsByClassName("pageContent");
  for (i = 0; i < pageContent.length; i++) {
    pageContent[i].style.display = "none";
  }
  link = document.getElementsByClassName("link");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

// --- Menu Script (Mobile)
const myLinks = document.getElementById("myLinks");

// --- Shows / Hides Menu
function menu() {
  if (myLinks.style.display === "flex") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "flex";
  } 
}

// --- Closes Menu on Interaction
function closeMenu() {
  myLinks.style.display = "none";
}