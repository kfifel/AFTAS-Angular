import {NgModule} from "@angular/core";
import {CompetitionListComponent} from "./competition-list/competition-list.component";
import {RouterModule} from "@angular/router";
import {routes} from "./routes/competition.route";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ CompetitionListComponent ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CompetitionModule {}
