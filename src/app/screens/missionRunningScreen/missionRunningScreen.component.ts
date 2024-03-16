import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventManager } from 'managers';
import { ExtendedCanvas } from 'models';
import * as PIXI from 'pixi.js';
import { Scene } from 'scenes/Scene';
import { TextureService } from 'services';
import { LoaderService } from 'services/LoaderService';

@Component({
  templateUrl: 'missionRunningScreen.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  providers: [EventManager],
})
export class MissionRunningScreenComponent implements OnInit, OnDestroy {
  title = 'GamesHub';

  private app: PIXI.Application;
  private eventManager: EventManager;
  private textureService: TextureService;
  private loaderService: LoaderService;

  public constructor(
    eventManager: EventManager,
    textureService: TextureService,
    loaderService: LoaderService
  ) {
    this.eventManager = eventManager;
    this.textureService = textureService;
    this.loaderService = loaderService;
    this.app = new PIXI.Application({ backgroundColor: 0x1099bb });
  }

  async ngOnInit() {
    new Scene(
      this.app,
      this.eventManager,
      this.textureService,
      this.loaderService
    );
  }

  ngOnDestroy() {
    document.body.removeChild(<ExtendedCanvas>this.app.view);
  }
}
