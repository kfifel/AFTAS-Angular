import {NgModule} from "@angular/core";
import {ListMemberComponent} from "./list-member/list-member.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {membersRoutes} from "./routes/members.routing";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UIModule} from "../../shared/ui/ui.module";
import { UpdateMemberComponent } from './update-member/update-member.component';
import {UiSwitchModule} from "ngx-ui-switch";


@NgModule({
  declarations: [ListMemberComponent, UpdateMemberComponent],
    imports: [SharedModule, RouterModule.forChild(membersRoutes), CommonModule, ReactiveFormsModule, UIModule, FormsModule, UiSwitchModule],
})
export class MemberModule {}
