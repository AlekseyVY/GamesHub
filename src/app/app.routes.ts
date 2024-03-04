import { Routes } from '@angular/router';
import {MainMenuScreenComponent, MissionRunningScreenComponent, MissionSelectionScreenComponent} from "./screens";

export const routes: Routes = [
  { path: "mainMenuScreen", component: MainMenuScreenComponent },
  { path: "missionSelectionScreen", component: MissionSelectionScreenComponent},
  { path: "missionRunningScreen", component: MissionRunningScreenComponent},
  { path: '**', redirectTo: '/mainMenuScreen', pathMatch: 'full' },
];
