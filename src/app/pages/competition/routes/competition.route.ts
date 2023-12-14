import {Routes} from "@angular/router";
import {CompetitionListComponent} from "../competition-list/competition-list.component";
import {UpdateCompetitionComponent} from "../update-competition/update-competition.component";


export const routes: Routes = [
  { path: "", component: CompetitionListComponent},
  { path: "new", component: UpdateCompetitionComponent},
]
