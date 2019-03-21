import { Adapter } from './adapter.model';
import { Injectable} from '@angular/core';
export class MemberShip  {
 constructor(
  public  status: String,
  public dateJoined: string,
  public membershipNo: number

) {}
}


@Injectable({
  providedIn: 'root'
})


export class MemberAdapter implements Adapter<MemberShip> {

  adapt(item: any): MemberShip {
    return new MemberShip(
      item.status,
      item.dateJoined,
      item.membershipNo
    )
  }
}


