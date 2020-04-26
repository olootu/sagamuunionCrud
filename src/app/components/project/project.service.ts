import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('https://www.sagamuunion.org/members/wp-json/wp/v2/posts?categories=7&_links&_embed');
  }

}
