import { Component, OnInit } from '@angular/core';
import {PaginationModel} from "../../../core/models/pagination.model";
import {MemberService} from "../service/service.service";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {IMember} from "../member.model";
import {SweetAlertService} from "../../../shared/ui/sweet-alert/sweet-alert.service";
import {BehaviorSubject, interval, Subject} from "rxjs";
import {debounceTime, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-list-level',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit {

  members: IMember[];
  breadCrumbItems: Array<{}> =  [{ label: 'Members' }, { label: 'Overview', active: true }];
  pagination: PaginationModel = new PaginationModel(0, 10, 0, 0);
  query: string;
  search$ = new Subject<string>();
  constructor(private memberService: MemberService,
              private _alert: SweetAlertService) { }

  ngOnInit(): void {
    this.loadAll(1);
  }

  onSuccess(result: PaginatedResponse<IMember>) {
    this.members = result.content;
    this.pagination.pageSize = result.pageSize;
    this.pagination.pageNumber = result.pageNumber;
    this.pagination.totalElements = result.totalElements;
    this.pagination.totalPages = result.totalPages;
  }

  private loadAll(page: number) {
    this.memberService.findAllMember().subscribe({
      next: (res) => {
        this.onSuccess(res)
      },
      error: err => {
        console.error(err)
      }
    })

    /*this.search$
      .pipe(
        debounceTime(500),
        switchMap((res) => {
          return this.memberService.findAllMember()

        })
      )
      .subscribe(() => {

    })*/
  }

  alert(enable: boolean, id: number) {
    let member = this.findMemberById(id);
    this._alert.confirm(
      "Enable/disable members",
      `Do you want to  ${enable ? 'enabled' : 'disabled'} Member : ${member.name} ${member.familyName}`,
      () => {this.enableMember(member, enable);},
      () => {member.enabled = !enable;}
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
    return this.members.find(member => member.id === id);
  }

  search() {
    this.search$.next(this.query);
  }
}
