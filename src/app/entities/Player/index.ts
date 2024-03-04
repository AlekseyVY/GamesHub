import { Animation, Coordinate, Playable } from 'models';

export class Player implements Playable {
  animationType: Animation;
  isFalling: boolean;
  isJumping: boolean;
  hp: number;
  position: Coordinate;
  speed: number;

  constructor() {
    this.animationType = Animation.IDLE;
    this.isFalling = false;
    this.isJumping = false;
    this.hp = 100;
    this.position = {
      x: 0,
      y: 0,
    };
    this.speed = 1;
  }

  jump(): void {
    this.isJumping = true;
    this.isFalling = false;
  }

  fall(): void {
    this.isJumping = false;
    this.isFalling = true;
  }

  moveLeft(): void {}

  moveRight(): void {}
}
