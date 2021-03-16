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

// --- Menu Script
const myLinks = document.getElementById("myLinks");
const mBtn = document.querySelector('#menuBtn');
const mID = document.getElementById("mLink");
          // ^^^ Only Grabs the 1st ID
function menu() {
  if (myLinks.style.display === "flex") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "flex";
  } 
}
          // Only works with Home / the first ID
function closeMenu() {
  myLinks.style.display = "none";
  console.log("pizza");
}

mID.addEventListener('click', closeMenu);