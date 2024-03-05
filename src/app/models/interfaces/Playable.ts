import { Animation } from 'models/enums';
import { Coordinate } from './Coordinate';
import { AnimatedSprite } from 'pixi.js';

export interface Playable {
  animationType: Animation;
  isFalling: boolean;
  isJumping: boolean;
  hp: number;
  position: Coordinate;
  speed: number;
  sprite: AnimatedSprite;

  fall(): void;
  jump(): void;
  moveLeft(): void;
  moveRight(): void;
}
