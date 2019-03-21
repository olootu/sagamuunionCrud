import {MemberShip} from './membership.model';
import { Adapter } from './adapter.model';
import { Injectable} from '@angular/core';


export class Member  {

constructor(
  public name: string,
  public email: string,
  public telephone: string,
  public id: string

) {}



}

export class Post {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})


export class MemberAdapter implements Adapter<Member> {

  adapt(item: any): Member {
    return new Member(
      item.name,
      item.email,
      item.telephone,
      item.id
    );
  }
}

