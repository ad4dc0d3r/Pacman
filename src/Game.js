import TileMap from "./TileMap.js";

const tileSize = 30;
const velocity = 1;
const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman();


function gameLoop(){
    // console.log("TEST")
    tileMap.draw(ctx);
    pacman.draw(ctx);
}


tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000);

d