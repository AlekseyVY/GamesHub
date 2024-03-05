import { Injectable } from '@angular/core';
import { Player } from 'entities';
import { BasicManager } from 'models';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventManager implements BasicManager {
  private behaviorSubject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  public getSubject() {
    return this.behaviorSubject;
  }

  public subscribeToPlayerMovement(player: Player) {
    const keyState = {};
    const { sprite } = player;

    window.addEventListener(
      'keydown',
      (e) => {
        // @ts-ignore
        keyState[e.keyCode] = true;

        this.behaviorSubject.next('keydown');
      },
      true
    );

    window.addEventListener(
      'keyup',
      (e) => {
        // @ts-ignore
        keyState[e.keyCode] = false;
      },
      true
    );

    function handleKeyStrokes() {
      // @ts-ignore
      if (keyState[37] || keyState[65]) {
        sprite.x -= 1.5;
      }
      // @ts-ignore
      if (keyState[39] || keyState[68]) {
        sprite.x += 1.5;
      }

      requestAnimationFrame(handleKeyStrokes);
    }

    handleKeyStrokes();
  }
}
