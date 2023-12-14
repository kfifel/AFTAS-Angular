import {NgModule} from "@angular/core";
import {CompetitionListComponent} from "./competition-list/competition-list.component";
import {RouterModule} from "@angular/router";
import {routes} from "./routes/competition.route";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {UIModule} from "../../shared/ui/ui.module";
import {FormsModule} from "@angular/forms";
import { UpdateCompetitionComponent } from './update-competition/update-competition.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import { DetailCompetitionComponent } from './detail-competition/detail-competition.component';

@NgModule({
  declarations: [ CompetitionListComponent, UpdateCompetitionComponent, DetailCompetitionComponent ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    UIModule,
    FormsModule,
    NgbDropdownModule,
  ]
})
export class CompetitionModule {}
