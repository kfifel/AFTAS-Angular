import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {ICompetition} from "../competition.model";
import {createRequestOption} from "../../../core/request/request.util";
import {Pagination} from "../../../core/request/request.model";

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
}
