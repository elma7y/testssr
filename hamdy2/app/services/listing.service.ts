import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BussinessData } from '../interfaces/bussiness-data';
@Injectable({
  providedIn: 'root',
})
export class ListingService {
  expandedStates: boolean[];
  details!: BussinessData;

  constructor(private http: HttpClient) {
    this.expandedStates = [];
  }

  getListing(): Observable<any> {
    return this.http.get(
      `${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`
    );
  }
  getBusinessesById(id: string | null): Observable<any> {
    return this.http.get(`${environment.BACKEND_DOMAIN}/get-business/${id}`);
  }
  getPostsById(id: string | null): Observable<any> {
    let body = {
      website_name: 'post-your-biz2.vercel.app',
      id: id,
    };
    return this.http.post(
      `${environment.BACKEND_DOMAIN}/get-posts-by-businessID`,
      body
    );
  }
}
