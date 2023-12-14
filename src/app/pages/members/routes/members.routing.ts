import {Routes} from "@angular/router";
import {ListMemberComponent} from "../list-member/list-member.component";
import {UpdateMemberComponent} from "../update-member/update-member.component";


export const membersRoutes: Routes = [
  {
    path: '',
    component: ListMemberComponent
  },
  {
    path: 'new',
    component: UpdateMemberComponent
  }
];
