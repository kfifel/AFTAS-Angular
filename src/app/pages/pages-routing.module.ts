import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'competitions', loadChildren: () => import('./competition/competition.module').then(m => m.CompetitionModule) },
  { path: 'members', loadChildren: () => import('./members/member.module').then(m => m.MemberModule) },
  { path: 'levels', loadChildren: () => import('./level/level.module').then(m => m.LevelModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
