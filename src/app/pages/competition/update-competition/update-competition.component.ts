import { Component, OnInit } from '@angular/core';
import {ICompetition} from "../competition.model";
import {CompetitionService} from "../service/service.service";
import {routes} from "../routes/competition.route";
import {Router} from "@angular/router";
import * as sweetalert2 from "sweetalert2";

@Component({
  selector: 'app-update-competition',
  templateUrl: './update-competition.component.html',
  styleUrls: ['./update-competition.component.scss']
})
export class UpdateCompetitionComponent implements OnInit {
  breadCrumbItems: Array<{}> =  [{ label: 'Competitions' }, { label: 'New', active: true }];
  isLoading: boolean = false;
  competition: ICompetition = {
    location: '',
    amount: 0,
    date: new Date(),
    startTime: null,
    endTime: null
  }
  constructor(private competitionService: CompetitionService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.isLoading = true;
    this.competitionService.create(this.competition).subscribe(
      (res) => {
        this.isLoading = false;
        this.router.navigate(["/competitions"]);
      },
      (error) => {
        this.isLoading = false;
        console.log(error)
        sweetalert2.default.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message
        })
        }
      );
  }

  protected readonly onmessage = onmessage;
}
