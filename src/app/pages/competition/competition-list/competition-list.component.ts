import { Component, OnInit } from '@angular/core';
import {CompetitionService} from "../service/service.service";
import {ICompetition} from "../competition.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-competition',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {
  competitions: ICompetition[];
  constructor(private competitionService: CompetitionService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.competitionService.findAllCompetition().subscribe({
      next: (res) => {
        this.competitions = res.content;
      },
      error: err => {
        console.error(err)
      }
    })

  }

}
