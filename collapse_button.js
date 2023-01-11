window.onload = function(){
  let myButton = document.getElementById("collapse-button");
  let myText = document.getElementById("text-box");
  myButton.onclick = function() {
    myText.classList.toggle("expanded");
  }
}

