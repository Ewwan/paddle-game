export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 100;
    this.height = 20;

    this.maxSpeed = 7;
    this.currentSpeed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 20
    };

    this.paddleToRightEdgeScreen = gameWidth - this.width;
  }

  moveLeft() {
    this.currentSpeed = -this.maxSpeed;
  }

  moveRight() {
    this.currentSpeed = this.maxSpeed;
  }

  stopMovement() {
    this.currentSpeed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#009";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {

    this.position.x += this.currentSpeed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x > this.paddleToRightEdgeScreen)
      this.position.x = this.paddleToRightEdgeScreen;
  }
}
