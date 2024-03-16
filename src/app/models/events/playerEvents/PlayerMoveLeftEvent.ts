import { GameEventType } from 'models';
import { BasicEvent } from '../BasicEvent';

export interface PlayerMoveLeftEvent extends BasicEvent {
  type: GameEventType.PLAYER_MOVE_LEFT;
}
