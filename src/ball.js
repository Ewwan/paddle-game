export default class Ball {
  constructor(gameWidth, sizeRatio, fillColor) {
    this.radius = gameWidth / sizeRatio;
    this.circle = {
      startAngle: 0 * Math.PI,
      endAngle: 2 * Math.PI
    };
    this.fillColor = fillColor;

    this.coordinates = {
      x: this.radius,
      y: this.radius
    };

    this.size = this.radius * 2;
    this.leftBallEdge = this.coordinates.x - this.radius;
    this.rightBallEdge = this.coordinates.x + this.radius;
    this.ballToRightEdgeScreen = gameWidth - this.radius;

    this.speed = {x: 2, y: 2}

    // this.maxSpeed = 7;
    // this.currentSpeed = 0;
  }

  // moveLeft() {
  //   this.currentSpeed = -this.maxSpeed;
  // }

  // moveRight() {
  //   this.currentSpeed = this.maxSpeed;
  // }

  // stopMovement() {
  //   this.currentSpeed = 0;
  // }

  draw(ctx) {
    // console.log("this.radius", this.radius);
    // console.log("this.size", this.size);
    // console.log("this.coordinates.x", this.coordinates.x);
    // console.log("this.coordinates.y", this.coordinates.y);

    ctx.fillStyle = this.fillColor;
    ctx.beginPath();
    ctx.arc(
      this.coordinates.x,
      this.coordinates.y,
      this.radius,
      this.circle.startAngle,
      this.circle.endAngle
    );
    ctx.fill();
  }

  update(deltaTime) {
    this.coordinates.x += this.speed.x;
    this.coordinates.y += this.speed.y;
    
    if (this.leftBallEdge < 0) this.coordinates.x = this.radius;
    if (this.rightBallEdge > this.ballToRightEdgeScreen)
      this.coordinates.x = this.ballToRightEdgeScreen;
  }
}
