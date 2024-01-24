const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
const pacmanImage = new Image();
pacmanImage.src = "../pac0.png";

// pacmanImage.onload = function () {
//   ctx.drawImage(pacmanImage, 0, 0, 32, 32);
// };
console.log("hiii");

ctx.fillStyle = "black";
ctx.fillRect(0,0,320,320);

ctx.strokeStyle = "yellow";
ctx.strokeRect(12,12,50,50);

function game(){
    ctx.drawImage(pacmanImage, 0, 0, 32, 32);
    console.log('hii')


}
setInterval(game,1000)