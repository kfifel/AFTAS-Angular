import {NgModule} from "@angular/core";
import {ListLevelComponent} from "./list-level/list-level.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {levelsRoutes} from "./routes/levels.routing";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UIModule} from "../../shared/ui/ui.module";
import { UpdateLevelComponent } from './update-level/update-level.component';


@NgModule({
  declarations: [ListLevelComponent, UpdateLevelComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(levelsRoutes),
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    FormsModule
  ],
})
export class LevelModule {}
