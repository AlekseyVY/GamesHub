import { GameEventType } from 'models';
import { BasicEvent } from '../BasicEvent';

export interface PlayerMoveRightEvent extends BasicEvent {
  type: GameEventType.PLAYER_MOVE_RIGHT;
}
