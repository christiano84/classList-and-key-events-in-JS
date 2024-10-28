const myBox = document.getElementById("myBox");
const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
  myBox.textContent = "😮";
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
  myBox.textContent = "😀";
  myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
  
  if (event.key.startsWith("Arrow")) {

    event.preventDefault();

    switch(event.key) {
      case "ArrowUp":
        y <= 0 ? y = 0 : y -= moveAmount;
        break;
      case "ArrowDown":
        y >= 500 ? y = 0 : y += moveAmount;
        break;
      case "ArrowLeft": 
        x <= 0 ? x = 0 : x -= moveAmount;
        break;
      case "ArrowRight":
        x >= 600 ? x = 0 : x += moveAmount;
        break;
    }
    myBox.style.top = `${y}px`
    myBox.style.left = `${x}px`
  }
});


