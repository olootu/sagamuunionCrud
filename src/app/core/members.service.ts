import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Member, MemberAdapter, Post} from '../models/members.model';
import { map} from 'rxjs/operators';
import { pipe, Observable, Subject  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

private posts: Member[] = [];
private postUpdated = new Subject<Member[]>();


  suGBUri = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient, private memberAdapter: MemberAdapter) { }


  addMemberPosts(post: Member) {
     this.http.post<{message: string, postId: string}>(this.suGBUri, post)
    .subscribe(res => {
      post.id = res.postId;
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
     // this.getPosts();
      console.log(res.message);
    });

  }

  getPostUpdatedListener() {

    return this.postUpdated.asObservable();

  }

  getPostId(id: string) {
    console.log('postId', id)
    return {...this.posts.find(p => p.id === id)};

  }

  getPosts() {
    return this.http.get<{message: string, posts: any}>(this.suGBUri)
    .pipe(
      map(data => {
        return data.posts.map(res => {
          return {
            name: res.name,
            email: res.email,
            telephone: res.telephone,
            id: res._id
          };
        });
      })
    )
    .subscribe((data) => {

      this.posts = data;
      this.postUpdated.next([...this.posts]);
    });
  }

  deletePost(postId: string) {
    return this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() => {
      console.log('Deleted');
      const updatedPost = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPost;
      this.postUpdated.next([...this.posts]);
    });
  }
}
