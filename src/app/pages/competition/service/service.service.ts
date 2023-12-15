import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {FishHunting, ICompetition, IRank} from "../competition.model";
import {createRequestOption} from "../../../core/request/request.util";
import {Pagination} from "../../../core/request/request.model";
import {IMember} from "../../members/member.model";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private baseUrl: string = environment.baseUrl + "/api/v1/competitions";
  constructor(private http: HttpClient) { }

  findAllCompetition(req?: Pagination): Observable<PaginatedResponse<ICompetition>> {
    const options = createRequestOption(req);
    return this.http.get<PaginatedResponse<ICompetition>>(this.baseUrl, {params: options});
  }

  create(competition: ICompetition): Observable<ICompetition> {
    return this.http.post<ICompetition>(this.baseUrl, competition);
  }

  findById(id: string) {
    return this.http.get<ICompetition>(this.baseUrl + '/' + id);
  }

  loadMemberRelationShip(id: String): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.baseUrl + '/' + id + '/members');
  }

  saveFishHunting(fishHunting: FishHunting) {
    return this.http.post(`${this.baseUrl}/${fishHunting.competitionCode}/hunting`, fishHunting);
  }

  createNewSubscription(memberId: number, competitionCode: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${competitionCode}/registrations`, {memberId: memberId});
  }

  calculateRanks(code: string): Observable<IRank[]> {
    return this.http.get<IRank[]>(`${this.baseUrl}/${code}/rankings`);
  }
}
