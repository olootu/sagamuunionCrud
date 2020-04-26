import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getWpApi() {
     return this.http.get('https://www.sagamuunion.org/members/wp-json/wp/v2/posts?categories=6&_links&_embed');
   }
}
