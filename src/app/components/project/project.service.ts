import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Wordpress} from '../../models/wordpress.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Wordpress[]> {
    return this.http.get<Wordpress[]>('https://www.sagamuunion.org/members/wp-json/wp/v2/posts?categories=7&_links&_embed');
  }

  getComments() {
    return this.http.get('https://www.sagamuunion.org/members/wp-json/wp/v2/comments');
  }

  postComments(postID, content, authorName) {
    //const post = 'author=10&content=Testing&post=288';${age}
    const post = {};
    const url = `https://www.sagamuunion.org/members/wp-json/wp/v2/comments?post=${postID}&content=${content}&author_name=${authorName}`;
    return this.http.post(url, post);
  }

}
