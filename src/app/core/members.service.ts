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
private token: string;
 private tokenTimer: any;

private isAuthenticated = false;
private authStatusListener = new Subject<boolean>(); // get if member is logged in


  memberGBUri = 'http://localhost:3000/api/member';
  signUpGBUri = 'http://localhost:3000/api/signup';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

    getJson(): Observable<any>{
      return  this.http.get('./assets/data.json')
      .pipe(map( (response: Response) => {
        const data = response;
        return data;
     }))
    }

/**
 * Register member from the UI
 * @param data data from the UI form
 */
  registerMember(data: Member) {
    // form Data instead of json
    const postData = new FormData();
    postData.append('name',data.name);
    postData.append('email', data.email);
    postData.append('password', data.password);
    postData.append('telephone', data.telephone);
    postData.append('image', data.imagePath, data.name); // post.name here represents the name that'll used as the img name on the backend

     this.http.post<{message: string, result: Member}>(this.signUpGBUri, postData)
    .subscribe(res => {
      data.id = res.result.id;
      this.posts.push(data);
      this.postUpdated.next([...this.posts]);
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

  /**
   *
   * @param pageSize no of pages to display
   * @param currentPage no of the current page
   */
  getMembers(pageSize: number, currentPage: number) {
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

  // getPosts(pageSize: number, currentPage: number) {
  //   const getParams = `?pageSize=$(pageSize)&currentPage=$(currentPage)`;
  //   return this.http.get<{message: string, posts: any}>(this.memberGBUri)
  //   .pipe(
  //     map(data => {
  //       return data.posts.map(res => {
  //         return <any>{
  //           name: res.name,
  //           email: res.email,
  //           password: res.password,
  //           telephone: res.telephone,
  //           id: res._id,
  //           imagePath: res.imagePath
  //         };
  //       });
  //     })
  //   )
  //   .subscribe((data) => {

  //     this.posts = data;
  //     this.postUpdated.next([...this.posts]);
  //   });
  // }

  deletePost(postId: string) {
    return this.http.delete('http://localhost:3000/api/member/' + postId)
    .subscribe(() => {
      console.log('Deleted');
      const updatedPost = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPost;
      this.postUpdated.next([...this.posts]);
    });
  }

  /**
   * Login member from the UI login forms c
   * check that username and password are correct
   * Announce to the application that user is now logged in by setting isAuthenticated to true
   * Set Subject variable to true to inform other components by emiting its value
   * @param post the data passed by the user from the UI login form
   */
  memberLogin(post: Member) {
    return this.http.post<{token: string, expiresIn: number}>('http://localhost:3000/api/login/', post)
    .subscribe(response => {
      const token = response.token;
      this.token = token;

      if (token) {
        const expiresInDuration = response.expiresIn;

        // log user out after the expired time from the server
        this.setTimer(expiresInDuration);

      this.isAuthenticated = true;
      this.authStatusListener.next(true); // this line emits true boolean if use is authenticated and signed in
      const now = new Date();
      const expirationDate = new Date( now.getTime() + expiresInDuration * 1000);
      this.saveAuthToLocalStorage(token, expirationDate);
      this.router.navigate(['/member']);
      console.log(expirationDate)
      }
    });
  }

  /**
   *
   * @param duration  time set for token expiration
   */
  private setTimer(duration: number){
    this.tokenTimer = setTimeout(() => {
      this.memberLogOut();
     }, duration * 1000);

  }

  /**
   * called when the logout button is clicked from the UI
   */
  memberLogOut() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthToLocalStorage();
    this.router.navigate(['/']);

  }

  /**
   * Use to check in the front end if user has already log in
   * We check the expiration time set in the token from the backend
   * Compare this to the token time in the local storage
   * If time on the localStorage is higher the expiration time is still ok
   */
  automaticallyAuthoriseUser(){
    const authInfo = this.getDataFromLocalStorage();
    if (!authInfo) {
      return;
    }

    const now = new Date();
    const timeLeftToExpire = authInfo.expirationDate.getTime() - now.getTime();
    if ( timeLeftToExpire > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.setTimer(timeLeftToExpire / 1000);
      this.authStatusListener.next(true);
    }
  }

  /**
   * save/store the token and expiration date from the server into the localStorage
   * @param token string
   * @param expirationDate Date
   */
  private saveAuthToLocalStorage(token: string, expirationDate: Date ){
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expirationDate.toISOString());
  }

  /**
   * Get data stored about login from the local storage
   */
  private getDataFromLocalStorage(){
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');

    if(!token || !expiration) {
      return;
    }

    return {
      token: token,
      expirationDate: new Date(expiration)
    }
  }

  /**
   * Clear localStorage when the user logs out
   */
  private clearAuthToLocalStorage(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  /**
   * Get the login token returned from the nodejs server
   */
  getToken() {
    return this.token;
  }

  /**
   * determines if the user is logged in or not
   */
  getIsAuthenticated(){
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
}
