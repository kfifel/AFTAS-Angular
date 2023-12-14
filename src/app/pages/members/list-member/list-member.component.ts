import { Component, OnInit } from '@angular/core';
import {PaginationModel} from "../../../core/models/pagination.model";
import {MemberService} from "../service/service.service";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {IMember} from "../member.model";

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss']
})
export class ListMemberComponent implements OnInit {

  members: IMember[];
  breadCrumbItems: Array<{}> =  [{ label: 'Members' }, { label: 'Overview', active: true }];
  pagination: PaginationModel = new PaginationModel(0, 10, 0, 0);
  query: string;
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.loadAll(1);
  }

  onSuccess(result: PaginatedResponse<IMember>) {
    this.members = result.content;
    console.log(result)
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
  }
}
