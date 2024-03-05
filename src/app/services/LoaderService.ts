import { Injectable } from '@angular/core';
import { Assets, Texture } from 'pixi.js';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public loadPlayerTexture() {
    return Assets.load<Texture>('./assets/Run.png');
  }
}
