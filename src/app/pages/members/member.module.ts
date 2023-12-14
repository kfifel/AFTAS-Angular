import {NgModule} from "@angular/core";
import {ListMemberComponent} from "./list-member/list-member.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {membersRoutes} from "./routes/members.routing";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UIModule} from "../../shared/ui/ui.module";


@NgModule({
  declarations: [ListMemberComponent],
  imports: [SharedModule, RouterModule.forChild(membersRoutes), CommonModule, ReactiveFormsModule, UIModule, FormsModule],
})
export class MemberModule {}
