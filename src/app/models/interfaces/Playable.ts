import { Animation } from 'models/enums';
import { Coordinate } from './Coordinate';

export interface Playable {
  animationType: Animation;
  isFalling: boolean;
  isJumping: boolean;
  hp: number;
  position: Coordinate;
  speed: number;

  fall(): void;
  jump(): void;
  moveLeft(): void;
  moveRight(): void;
}
