import { Component, OnInit } from '@angular/core';
import {PaginationModel} from "../../../core/models/pagination.model";
import {User} from "../../../core/models/auth.models";
import {UserService} from "../service/user.service";
import {IMember} from "../../members/member.model";
import {SweetAlertService} from "../../../shared/ui/sweet-alert/sweet-alert.service";
import {MemberService} from "../../members/service/service.service";

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  users: User[];
  breadCrumbItems: Array<{}> =  [{ label: 'User Management' }, { label: 'Overview', active: true }];
  pagination: PaginationModel = new PaginationModel(0, 10, 0, 0);
  query: string;
  constructor(private userService: UserService,
              private memberService: MemberService,
              private _alert: SweetAlertService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => {
        this.users = users;
      }
    })
  }
  alert(enable: boolean, id: number) {
    let user = this.findMemberById(id);
    this._alert.confirm(
      "Enable/disable members",
      `Do you want to  ${enable ? 'enabled' : 'disabled'} Member : ${user.firstName} ${user.lastName}`,
      () => {this.enableMember(user, enable);},
      () => {user.enabled = !enable;}
    );
  }

  enableMember(member: IMember, enable: boolean) {
    let formData = new FormData();
    formData.append('enable', String(enable));
    this.memberService.enableMember(member.id, formData).subscribe(
      () => {
        this._alert.success('Success', `Member has been ${enable ? 'enabled' : 'disabled'} successfully`);
      },
      (error) => {
        member.enabled = !enable;
        console.error(error);
        this._alert.error('Error', 'An error occurred while enabling/disabling member');
      }
    );
  }

  findMemberById(id: number) {
    return this.users.find(member => member.id === id);
  }

}
