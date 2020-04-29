import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

import {Wordpress} from '../../models/wordpress.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getWpApi(): Observable<Wordpress[]> {
     return this.http.get<Wordpress[]>('https://www.sagamuunion.org/members/wp-json/wp/v2/posts?categories=6&_links&_embed');
   }
}
