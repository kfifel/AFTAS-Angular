import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {IMember} from "../member.model";
import {createRequestOption} from "../../../core/request/request.util";
import {IPagination} from "../../../core/request/request.model";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl: string = environment.baseUrl + "/api/v1/members";
  constructor(private http: HttpClient) { }

  findAllMember(req?: IPagination): Observable<PaginatedResponse<IMember>> {
    const options = createRequestOption(req);
    return this.http.get<PaginatedResponse<IMember>>(this.baseUrl, {params: options});
  }

  create(member: IMember): Observable<IMember> {
    return this.http.post<IMember>(this.baseUrl, member);
  }

  enableMember(id: number, formData: FormData) {
    return this.http.patch(`${this.baseUrl}/${id}/enable`, formData);
  }
}
