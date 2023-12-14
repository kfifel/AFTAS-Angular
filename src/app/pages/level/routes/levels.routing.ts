import {Routes} from "@angular/router";
import {ListLevelComponent} from "../list-level/list-level.component";
import {UpdateLevelComponent} from "../update-level/update-level.component";


export const levelsRoutes: Routes = [
  {
    path: '',
    component: ListLevelComponent
  },
  {
    path: 'new',
    component: UpdateLevelComponent
  }
];
