export default class InputHandler {
  constructor(object) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          object.moveLeft();
          break;
        case 39:
          object.moveRight();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (object.currentSpeed < 0) object.stopMovement();
          break;
        case 39:
          if (object.currentSpeed > 0) object.stopMovement();
          break;
        default:
          break;
      }
    });
  }
}
