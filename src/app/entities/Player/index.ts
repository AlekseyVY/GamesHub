import { EventManager } from 'managers';
import { Animation, Coordinate, Playable } from 'models';
import { AnimatedSprite, Texture } from 'pixi.js';
import { TextureService } from 'services';

export class Player implements Playable {
  animationType: Animation;
  isFalling: boolean;
  isJumping: boolean;
  hp: number;
  position: Coordinate;
  speed: number;
  sprite: AnimatedSprite;

  constructor(
    eventManager: EventManager,
    textureService: TextureService,
    texture: Texture
  ) {
    this.animationType = Animation.IDLE;
    this.isFalling = false;
    this.isJumping = false;
    this.hp = 100;
    this.position = {
      x: 0,
      y: 0,
    };
    this.speed = 1;
    this.sprite = textureService.getPlayerSprite(texture);
    this.sprite.play();
    eventManager.subscribeToPlayerMovement(this);
  }

  public jump(): void {
    this.isJumping = true;
    this.isFalling = false;
  }

  public fall(): void {
    this.isJumping = false;
    this.isFalling = true;
  }

  public moveLeft(): void {}

  public moveRight(): void {}
}
