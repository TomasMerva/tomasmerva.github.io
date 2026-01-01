function collapseFunction(collapse_ID) {
  var container = document.getElementById(collapse_ID);
  if (container.style.display === "none") {
    container.style.display = "block";
    container.style.maxHeight = container.scrollHeight + "px";
  } else {
    container.style.maxHeight = null;
    container.style.display = "none";
  } 
}