import { Component, OnInit } from '@angular/core';
import { MembersService } from './core/members.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularcrud';

  constructor( private ms: MembersService){}
/**
 *check whether user is logged in or not on entry
 * @memberof AppComponent
 */
ngOnInit() {
    this.ms.automaticallyAuthoriseUser();
  }
}
