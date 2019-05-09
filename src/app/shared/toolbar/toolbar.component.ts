import { Component, OnInit, OnDestroy } from '@angular/core';
import { MembersService } from './../../core/members.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  memberIsAuthenticated: boolean;
  showNav: boolean = false;

  constructor(private ms: MembersService) { }
/**
 *Check for the login status on entry
 *subscribe to the getIsAuthenticated from the service
 * @memberof ToolbarComponent
 */
ngOnInit() {
    this.memberIsAuthenticated = this.ms.getIsAuthenticated();
    this.authListenerSubs =  this.ms.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.memberIsAuthenticated = isAuthenticated;
    });
  }

  onShowNav(){
    this.showNav = !this.showNav;
    console.log('hfhfhfjfjfjh')
  }

 ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
 }
/**
 *log out user on button click
 * @memberof ToolbarComponent
 */
onLogOut() {
  this.ms.memberLogOut();
 }
}
