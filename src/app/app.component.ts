import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GamesHub';

  async ngOnInit() {
    const app = new PIXI.Application({
      background: '#1099bb',
    });
    // @ts-ignore
    document.body.appendChild(app.view);
    PIXI.Assets.load('./assets/Run.png').then((texture) => {
      let frames = [];
      let spriteWidth = texture.width / 8;
      for (let i = 0; i < 8; i++) {
        let rectangle = new PIXI.Rectangle(
          i * spriteWidth,
          0,
          spriteWidth,
          texture.height
        );
        let frame = new PIXI.Texture(texture.baseTexture, rectangle);
        frames.push(frame);
      }
      let animatedSprite = new PIXI.AnimatedSprite(frames);
      animatedSprite.animationSpeed = 0.3;
      animatedSprite.play();

      const keyState = {};

      window.addEventListener(
        'keydown',
        function (e) {
          console.log(e);
          // @ts-ignore
          keyState[e.keyCode] = true;
        },
        true
      );

      window.addEventListener(
        'keyup',
        function (e) {
          // @ts-ignore
          keyState[e.keyCode] = false;
        },
        true
      );

      function handleKeyStrokes() {
        // @ts-ignore
        if (keyState[37] || keyState[65]) {
          animatedSprite.x -= 1.5;
        }
        // @ts-ignore
        if (keyState[39] || keyState[68]) {
          animatedSprite.x += 1.5;
        }

        // @ts-ignore
        requestAnimationFrame(handleKeyStrokes);
      }

      handleKeyStrokes();

      app.stage.addChild(animatedSprite);
    });
  }
}
