import { GameEventType } from 'models';
import { BasicEvent } from '../BasicEvent';

export interface PlayerJumpEvent extends BasicEvent {
  type: GameEventType.PLAYER_JUMP;
}
