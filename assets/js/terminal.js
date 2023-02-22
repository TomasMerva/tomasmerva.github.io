const terminal = document.getElementById("my-terminal");
const welcomeText = terminal.getAttribute("data-welcome-text");

const welcomeElement = document.getElementById("welcome");
const asciiTextElement = document.getElementById("ascii-text");

let i = 0;
const intervalId = setInterval(() => {
  if (i >= welcomeText.length) {
    clearInterval(intervalId);

    // Display the ASCII text after the welcome text is fully visualized
    setTimeout(() => {
      // Display the ASCII text
      asciiTextElement.textContent = "\n\n*****\n*****\n*****\n*****\n***********\n*********\n*******\n*****\n***\n*";
      asciiTextElement.style.display = "block";
    }, 1000);
    return;
  }

  welcomeElement.textContent += welcomeText[i];
  i++;
}, 50);




