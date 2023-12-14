import {Routes} from "@angular/router";
import {CompetitionListComponent} from "../competition-list/competition-list.component";
import {UpdateCompetitionComponent} from "../update-competition/update-competition.component";
import {DetailCompetitionComponent} from "../detail-competition/detail-competition.component";


export const routes: Routes = [
  { path: "", component: CompetitionListComponent},
  { path: "new", component: UpdateCompetitionComponent},
  { path: ":id/detail", component: DetailCompetitionComponent},
]
