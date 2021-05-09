import Paddle from "./paddle";
import Ball from "./ball";

import InputHandler from "./input";

let canvas = document.getElementById("mainScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 700;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, 35, "#ff3333");

new InputHandler(paddle);
// new InputHandler(ball);

let lastTime = 0;

function makePaddle(deltaTime, ctx) {
  ctx.clearRect(
    paddle.position.x,
    paddle.position.y,
    paddle.width,
    paddle.height
  );
  paddle.update(deltaTime);
  paddle.draw(ctx);
}

function makeBall(deltaTime, ctx) {
  //const right = x + radius; const left = x - radius;
  // leftBallEdge - this.radius

  ctx.clearRect(ball.leftBallEdge, ball.rightBallEdge, ball.size, ball.size);

  // ball.update(deltaTime);
  ball.draw(ctx);
}

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  makePaddle(deltaTime, ctx);
  makeBall(deltaTime, ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
