import MovingDirection from "./MovingDirection.js";
export default class Pacman {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;
    this.#loadPacmanImage();
  }

  draw(ctx) {
    console.log("draz fct called");
    console.log(this.pacmanImages[this.pacmanIndex]);
    console.log(this.x);
    console.log(this.y);
    console.log(this.tileSize);

    ctx.drawImage(
      // this.pacmanImages[this.pacmanIndex],
      // this.x+4,
      // this.y+4,
      // this.tileSize/1.4,
      // this.tileSize/1.4
      this.pacmanImages[this.pacmanIndex],
      this.x,
      this.y,
      this.tileSize,
      this.tileSize
    );
  }

  #loadPacmanImage() {
    const pacmanImage1 = new Image();
    pacmanImage1.src = "../images/pac0.png";
    const pacmanImage2 = new Image();
    pacmanImage2.src = "../images/pac1.png";
    const pacmanImage3 = new Image();
    pacmanImage3.src = "../images/pac2.png";
    const pacmanImage4 = new Image();
    pacmanImage4.src = "../images/pac1.png";

    this.pacmanImages = [
      pacmanImage1,
      pacmanImage2,
      pacmanImage3,
      pacmanImage4,
    ];

    this.pacmanIndex = 2;
  }
}
