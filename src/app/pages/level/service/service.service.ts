import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {ILevel} from "../level.model";
import {createRequestOption} from "../../../core/request/request.util";
import {Pagination} from "../../../core/request/request.model";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private baseUrl: string = environment.baseUrl + "/api/v1/levels";
  constructor(private http: HttpClient) { }

  findAllLevel(req?: Pagination): Observable<ILevel[]> {
    const options = createRequestOption(req);
    return this.http.get<ILevel[]>(this.baseUrl, {params: options});
  }

  create(level: ILevel): Observable<ILevel> {
    return this.http.post<ILevel>(this.baseUrl, level);
  }
}
