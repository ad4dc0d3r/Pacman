import Pacman from './Pacman.js';
// import Game from './Games.js';--> was looking for the instantiation of this.tileSize in getPacman


export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.yellowDot = new Image();
    this.yellowDot.src = "../images/yellowDot.png";
    this.wall = new Image();
    this.wall.src = "../ressources/wall.png";
    this.ghost = new Image();
    this.ghost.src = "../images/ghost.png";
    this.food = new Image();
    this.food.src = "../images/strawberry.png";
    
  }

  //1-Wall
  //0-Dots
  //2 blank
  //3 ghost
  //4-Pacman 

  // map = [
  //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //   [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  //   [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // ];

  // map = [
  //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //   [1, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  //   [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],   
  //   [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  //   [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  //   [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  //   [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  //   [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // ];

  map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 2, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 3, 3, 3, 1, 0, 1, 1, 0, 1],     
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,this.map[0].length * this.tileSize,this.map.length * this.tileSize);
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 1) {
          this.#drawWall(ctx, column, row, this.tileSize);
        } else if (tile === 0) {
          this.#drawDot(ctx, column, row, this.tileSize);
        }
          else if (tile === 3) {
          this.#drawGost(ctx, column, row, this.tileSize);
        }
        else if (tile === 5) {
          this.#drawFood(ctx, column, row, this.tileSize);
        }
        
        // ctx.strokeStyle = "yellow";
        // ctx.strokeRect(
        //   column * this.tileSize,
        //   row * this.tileSize,
        //   this.tileSize,
        //   this.tileSize
        // );
      }
    }
  }

  #drawFood(ctx, column, row, size) {
    ctx.drawImage(
      this.food,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
    }
  #drawWall(ctx, column, row, size) {
    ctx.drawImage(
      this.wall,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawGost(ctx, column, row, size) {
    ctx.drawImage(
      this.ghost,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawDot(ctx, column, row, size) {
    ctx.drawImage(
      // this.yellowDot,
      // column * (this.tileSize)+4,
      // (row * this.tileSize)+4,
      // size/1.5,
      // size/1.5
      this.yellowDot,
      column * (this.tileSize),
      (row * this.tileSize),
      size,
      size
    );
  }

  getPacman(velocity){
    for(let row = 0; row<this.map.length; row++){
        for(let column = 0; column<this.map[row].length;column++){
            let tile = this.map[row][column];
            if(tile===4){
                this.map[row][column]= 0;
                console.log(this);
                // console.log(column * this.tileSize);
                // console.log(row * this.tileSize);
                // console.log(this.tileSize);
                return new Pacman(
                    column * this.tileSize, 
                    row * this.tileSize, 
                    this.tileSize,
                    velocity, 
                    this);

            }
        }
    }

  }

  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }
}
