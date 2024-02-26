import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../../../core/models/auth.models";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseUrl = environment.baseUrl + "/api/v1/users"
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
