import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Member} from '../models/members.model';
import { map} from 'rxjs/operators';
import { pipe, Observable, Subject  } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

private posts: Member[] = [];
private postUpdated = new Subject<Member[]>();


  memberGBUri = 'http://localhost:3000/api/member';
  signUpGBUri = 'http://localhost:3000/api/signup';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }


  addMemberPosts(post: Member) {
    // form Data instead of json
    const postData = new FormData();
    postData.append('name',post.name);
    postData.append('email', post.email);
    postData.append('password', post.password);
    postData.append('telephone', post.telephone);
    postData.append('image', post.imagePath, post.name); // post.name here represents the name that'll used as the img name on the backend

     this.http.post<{message: string, result: Member}>(this.signUpGBUri, postData)
    .subscribe(res => {
   post.id = res.result.id;
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
     // this.getPosts();
      console.log(res);
      this.router.navigate(['member']);
    });

  }

  updateMemberPosts(id: any, post: Member){
    return this.http.put('http://localhost:3000/api/member/'+id, post)
    .subscribe(res =>{
      console.log(res);
    })
    this.router.navigate(['/']);
  }

  getPostUpdatedListener() {

    return this.postUpdated.asObservable();

  }

  getPostId(id: any) {
    console.log('postId', id)
    return {...this.posts.find(p => p.id === id)};

  }

  getPosts(pageSize: number, currentPage: number) {
    const getParams = `?pageSize=$(pageSize)&currentPage=$(currentPage)`;
    return this.http.get<{message: string, posts: any}>(this.memberGBUri)
    .pipe(
      map(data => {
        return data.posts.map(res => {
          return <any>{
            name: res.name,
            email: res.email,
            password: res.password,
            telephone: res.telephone,
            id: res._id,
            imagePath: res.imagePath
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
    return this.http.delete('http://localhost:3000/api/member/' + postId)
    .subscribe(() => {
      console.log('Deleted');
      const updatedPost = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPost;
      this.postUpdated.next([...this.posts]);
    });
  }

  memberLogin(post: Member) {
    return this.http.post('http://localhost:3000/api/login/', post)
    .subscribe(response => {
      console.log('login response', response)
    });
  }
}
