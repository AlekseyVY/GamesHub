import { GameEventType } from 'models';
import { BasicEvent } from '../BasicEvent';

export interface PlayerFall extends BasicEvent {
  type: GameEventType.PLAYER_FALL;
}
