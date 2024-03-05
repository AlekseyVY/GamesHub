import { Injectable } from '@angular/core';
import { AnimatedSprite, Rectangle, Texture } from 'pixi.js';

@Injectable({
  providedIn: 'root',
})
export class TextureService {
  public getPlayerSprite({
    baseTexture,
    height,
    width,
  }: Texture): AnimatedSprite {
    let frames = [];
    let spriteWidth = width / 8;

    for (let i = 0; i < 8; i++) {
      let rectangle = new Rectangle(i * spriteWidth, 0, spriteWidth, height);
      let frame = new Texture(baseTexture, rectangle);
      frames.push(frame);
    }

    const animatedSprite = new AnimatedSprite(frames);
    animatedSprite.animationSpeed = 0.3;

    return animatedSprite;
  }
}
