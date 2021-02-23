// --- It works, but the intial load shows everything, 
// --- So you have to click a button for it to work correctly. 

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