import {Routes} from "@angular/router";
import {ListMemberComponent} from "../list-member/list-member.component";


export const membersRoutes: Routes = [
  {
    path: '',
    component: ListMemberComponent
  },
  {
    path: 'new',
    component: ListMemberComponent
  }
];
