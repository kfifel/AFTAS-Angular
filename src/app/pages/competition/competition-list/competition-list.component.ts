import { Component, OnInit } from '@angular/core';
import {CompetitionService} from "../service/service.service";
import {ICompetition} from "../competition.model";
import {PaginationModel} from "../../../core/models/pagination.model";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {SearchWithPagination} from "../../../core/request/request.model";

@Component({
  selector: 'app-competition',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {
  competitions: ICompetition[];
  breadCrumbItems: Array<{}> =  [{ label: 'Competitions', link: "/competitions" }, { label: 'Overview', active: true }];
  pagination: PaginationModel = new PaginationModel(0, 10, 0, 0);
  query: string;
  constructor(private competitionService: CompetitionService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  onSuccess(result: PaginatedResponse<ICompetition>) {
    this.competitions = result.content;
    console.log(result)
    this.pagination.pageSize = result.pageSize;
    this.pagination.pageNumber = result.pageNumber;
    this.pagination.totalElements = result.totalElements;
    this.pagination.totalPages = result.totalPages;
  }

  private loadAll() {
    this.competitionService.findAllCompetition().subscribe({
      next: (res) => {
        this.onSuccess(res)
      },
      error: err => {
        console.error(err)
      }
    })
  }

  searchCompetition() {
    let pagination = new SearchWithPagination(0, this.pagination.pageSize, [], this.query);
    this.competitionService.findAllCompetition(pagination).subscribe({
      next: (res) => {
        this.onSuccess(res)
      },
      error: err => {
        console.error(err)
      }
    })
  }
}
