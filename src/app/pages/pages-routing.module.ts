import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import {ManagerGuard} from "../core/guards/manager.guard";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'competitions', loadChildren: () => import('./competition/competition.module').then(m => m.CompetitionModule) },
  { path: 'user-management', loadChildren: () => import('./users-management/users.module').then(m => m.UsersModule) },
  {
    path: 'members',
    canActivate: [ManagerGuard],
    loadChildren: () => import('./members/member.module').then(m => m.MemberModule)
  },
  { path: 'levels', loadChildren: () => import('./level/level.module').then(m => m.LevelModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
