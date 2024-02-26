import {NgModule} from "@angular/core";
import {UsersManagementComponent} from "./list/users-management.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UIModule} from "../../shared/ui/ui.module";
import {JudgeGuard} from "../../core/guards/judge.guard";
import {UiSwitchModule} from "ngx-ui-switch";

const routes: Routes = [
  {
    path: "",
    component: UsersManagementComponent,
    canActivate: [JudgeGuard]
  }
]
@NgModule({
  declarations: [
    UsersManagementComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    FormsModule,
    UiSwitchModule
  ],

})
export class UsersModule {

}
