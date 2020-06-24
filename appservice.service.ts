import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) {

  }
  fetch() {
    console.log("biodata report");
    return this.http.get<any>("http://localhost:8888/posts");

  }
}
