import { Player } from 'entities/Player';
import { EventManager } from 'managers';
import { BasicScene } from 'models';
import { ExtendedCanvas } from 'models/interfaces';
import * as PIXI from 'pixi.js';
import { Subscription } from 'rxjs';
import { TextureService } from 'services';
import { LoaderService } from 'services/LoaderService';

export class Scene implements BasicScene {
  private app: PIXI.Application;
  private player: Player | null = null;
  private eventManager: EventManager;
  private textureService: TextureService;
  private loaderService: LoaderService;
  private subscribe: Subscription = new Subscription();

  constructor(
    app: PIXI.Application,
    eventManager: EventManager,
    textureService: TextureService,
    loaderService: LoaderService
  ) {
    this.eventManager = eventManager;
    this.textureService = textureService;
    this.loaderService = loaderService;
    this.app = app;
    this.start();
  }

  private injectAppViewIntoDOM() {
    document.body.appendChild(<ExtendedCanvas>this.app.view);
  }

  private loadAssets() {
    return {
      playerTexture: this.loaderService.loadPlayerTexture(),
    };
  }

  public async start(): Promise<void> {
    this.injectAppViewIntoDOM();
    const { playerTexture } = this.loadAssets();
    this.player = new Player(
      this.eventManager,
      this.textureService,
      await playerTexture
    );
    this.subscribe = this.eventManager.getSubject().subscribe(console.log);
    this.app.stage.addChild(this.player.sprite);
  }
}
