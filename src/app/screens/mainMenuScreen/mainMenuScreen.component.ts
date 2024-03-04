import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterLink} from "@angular/router";


@Component({
  templateUrl: "mainMenuScreen.component.html",
  standalone: true,
  imports: [
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuScreenComponent {}
