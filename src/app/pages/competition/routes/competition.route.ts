import {Routes} from "@angular/router";
import {CompetitionListComponent} from "../competition-list/competition-list.component";
import {UpdateCompetitionComponent} from "../update-competition/update-competition.component";
import {DetailCompetitionComponent} from "../detail-competition/detail-competition.component";
import {MemberGuard} from "../../../core/guards/member.guard";
import {JudgeGuard} from "../../../core/guards/judge.guard";


export const routes: Routes = [
  { path: "", component: CompetitionListComponent, canActivate: [MemberGuard]},
  { path: "new", component: UpdateCompetitionComponent, canActivate: [JudgeGuard]},
  { path: ":id/detail", component: DetailCompetitionComponent, canActivate: [MemberGuard]},
]
