import { Component, OnInit } from '@angular/core';
import {PaginationModel} from "../../../core/models/pagination.model";
import {LevelService} from "../service/service.service";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {ILevel} from "../level.model";
import {SweetAlertService} from "../../../shared/ui/sweet-alert/sweet-alert.service";

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.scss']
})
export class ListLevelComponent implements OnInit {

  levels: ILevel[];
  breadCrumbItems: Array<{}> =  [{ label: 'Levels' }, { label: 'Overview', active: true }];
  pagination: PaginationModel = new PaginationModel(0, 10, 0, 0);
  query: string;
  isLoading: boolean = false;
  constructor(private levelService: LevelService) { }

  ngOnInit(): void {
    this.loadAll(1);
  }

  onSuccess(result: ILevel[]) {
    this.levels = result;
  }

  private loadAll(page: number) {
    isLoading: true;
    this.levelService.findAllLevel().subscribe({
      next: (res) => {
        this.onSuccess(res)
      },
      error: err => {
        console.error(err)
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }
}
