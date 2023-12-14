import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompetitionService} from "../service/service.service";
import {SweetAlertService} from "../../../shared/ui/sweet-alert/sweet-alert.service";
import {ICompetition} from "../competition.model";
import {OwlOptions} from "ngx-owl-carousel-o";
import {Time} from "@angular/common";

@Component({
  selector: 'app-detail-competition',
  templateUrl: './detail-competition.component.html',
  styleUrls: ['./detail-competition.component.scss']
})
export class DetailCompetitionComponent implements OnInit {

  competition: ICompetition;
  breadCrumbItems: Array<{}> =  [{ label: 'Competitions' }, { label: 'Detail', active: true }];
  timelineCarousel: OwlOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
    dots: false,
    responsive: {
      680: {
        items: 4
      },
    }
  }
  constructor(private route: ActivatedRoute,
              private competitionService: CompetitionService,
              private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.competitionService.findById(id).subscribe(
      (competition) => {
        console.log(competition);
        this.competition = competition;
      },
      (error) => {
        this.sweetAlertService.error("Error to get competition", error.error.message)
        setTimeout(() => {
          window.history.back();
        }, 2000);
      }
    )
  }

  combineDateWithTime(date: Date | undefined, startTime: Time | undefined) {
    if(date == undefined || startTime == undefined) return undefined;
    let dateStr = date.toString();
    let timeStr = startTime.toString();
    return new Date(`${dateStr.substring(0, 10)}T${timeStr}`);
  }
}
