import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostingService {
  constructor(private http: HttpClient) {}
  getPosting(): Observable<any> {
    return this.http.get(
      `${environment.BACKEND_DOMAIN}/get-all-posts-website-request/${environment.SITE_DOMAIN}`
    );
  }
  getPostingById(id: string | null): Observable<any> {
    return this.http.get(
      `${environment.BACKEND_DOMAIN}/get-post-website_request/${id}`
    );
  }
}
