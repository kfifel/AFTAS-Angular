import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompetitionService} from "../service/service.service";
import {SweetAlertService} from "../../../shared/ui/sweet-alert/sweet-alert.service";
import {FishHunting, ICompetition} from "../competition.model";
import {OwlOptions} from "ngx-owl-carousel-o";
import {Time} from "@angular/common";
import {IMember} from "../../members/member.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IFish} from "../../fish/fish.model";
import {FishService} from "../../fish/service/service.service";

@Component({
  selector: 'app-detail-competition',
  templateUrl: './detail-competition.component.html',
  styleUrls: ['./detail-competition.component.scss']
})
export class DetailCompetitionComponent implements OnInit {

  competition: ICompetition;
  fishHunting: FishHunting = {
    fishWeight: null,
    fishName: '',
    memberId: null,
    competitionCode: ''
  };
  fishes: IFish[] = [];
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
              private fishService: FishService,
              private sweetAlertService: SweetAlertService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.competitionService.findById(id).subscribe(
      (competition) => {
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

  loadMemberRelationShip() {
    this.competitionService.loadMemberRelationShip(this.competition.code).subscribe(
      (res: IMember[]) => {
        this.competition.members = res;
      },
      (error) => {
        this.sweetAlertService.error("Error to load member relationship", error.error.message)
      }
    );
  }


  /**
   * Open modal
   * @param content modal content
   * @param memberId
   */
  openModal(content: any, memberId: number) {
    this.loadFishes();
    this.fishHunting.competitionCode = this.competition.code;
    this.fishHunting.memberId = memberId;
    this.modalService.open(content, { centered: true });
  }

  saveFishHunting() {
    this.competitionService.saveFishHunting(this.fishHunting).subscribe(
      () => {
        this.onSuccessSaveFishHunting();
      },
      (error) => {
        this.sweetAlertService.error("Error to save fish hunting", error.error.message)
      }
    );
  }

  onSuccessSaveFishHunting() {
    this.sweetAlertService.success("Success", "Fish Hunting Saved");
    this.competition
      .members
      .filter(member => member.number == this.fishHunting.memberId)[0]
      .nbrHunting++;
    this.ResetFishHunting();
    this.modalService.dismissAll('Save click');

  }

  private loadFishes() {
    if(this.fishes.length == 0) {
      this.fishService.findAllFish().subscribe({
        next: (res) => {
          this.fishes = res;
        },
        error: () => {
          this.sweetAlertService.error("Error", "Error Server");
        }
      });
    }
  }

  private ResetFishHunting() {
    // Reset the object after saving
    this.fishHunting = {
      fishWeight: null,
      fishName: '',
      memberId: null,
      competitionCode: ''
    };
  }
}
