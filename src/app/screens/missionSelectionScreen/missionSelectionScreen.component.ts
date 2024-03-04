import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterLink} from "@angular/router";


@Component({
  templateUrl: "missionSelectionScreen.component.html",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink
  ]
})
export class MissionSelectionScreenComponent {

}
