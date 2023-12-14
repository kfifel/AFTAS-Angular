import { Component, OnInit } from '@angular/core';
import {MemberService} from "../service/service.service";
import {IdentityDocumentType, IMember} from "../member.model";
import {Router} from "@angular/router";
import {SweetAlertService} from "../../../shared/ui/sweet-alert/sweet-alert.service";

@Component({
  selector: 'app-update-level',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss']
})
export class UpdateMemberComponent implements OnInit {
  breadCrumbItems: Array<{}> =  [{ label: 'Members' }, { label: 'New', active: true }];
  isLoading: boolean = false;

  identityDocumentTypes = Object.keys(IdentityDocumentType);
  member: IMember = {
    name: null,
    familyName: null,
    accessionDate: new Date(),
    nationality: null,
    identityDocumentType: null,
    identityNumber: null,
  }
  constructor(private memberService: MemberService,
              private router: Router,
              private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
  }

  save() {
    this.isLoading = true;
    this.memberService.create(this.member).subscribe(
      (res) => {
        this.isLoading = false;
        this.router.navigate(["/members"]);
      },
      (error) => {
        this.isLoading = false;
        this.sweetAlertService.error("Error to save new member", error.error.message)
      }
    );
  }

  protected readonly IdentityDocumentType = IdentityDocumentType;
}
