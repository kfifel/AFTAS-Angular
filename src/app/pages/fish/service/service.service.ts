import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IFish} from "../fish.model";
import {createRequestOption} from "../../../core/request/request.util";
import {Pagination} from "../../../core/request/request.model";

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private baseUrl: string = environment.baseUrl + "/api/v1/fishes";
  constructor(private http: HttpClient) { }

  findAllFish(req?: Pagination): Observable<IFish[]> {
    const options = createRequestOption(req);
    return this.http.get<IFish[]>(this.baseUrl, {params: options});
  }

  create(fish: IFish): Observable<IFish> {
    return this.http.post<IFish>(this.baseUrl, fish);
  }
}
