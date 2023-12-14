import { Component, OnInit } from '@angular/core';
import {LevelService} from "../service/service.service";
import {ILevel} from "../level.model";
import {Router} from "@angular/router";
import {SweetAlertService} from "../../../shared/ui/sweet-alert/sweet-alert.service";

@Component({
  selector: 'app-update-level',
  templateUrl: './update-level.component.html',
  styleUrls: ['./update-level.component.scss']
})
export class UpdateLevelComponent implements OnInit {
  breadCrumbItems: Array<{}> =  [{ label: 'Levels' }, { label: 'New', active: true }];
  isLoading: boolean = false;

  level: ILevel = {
    code: null,
    description: null,
    point: null
  }
  constructor(private levelService: LevelService,
              private router: Router,
              private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
  }

  save() {
    this.isLoading = true;
    this.levelService.create(this.level).subscribe(
      (res) => {
        this.isLoading = false;
        this.router.navigate(["/levels"]);
      },
      (error) => {
        this.isLoading = false;
        this.sweetAlertService.error("Error to save new level", error.error.message)
      }
    );
  }
}
