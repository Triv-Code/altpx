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

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
    console.log("first");
  } else {
    x.style.display = "flex";
    console.log("second");
  } 
  console.log("navtest");
}