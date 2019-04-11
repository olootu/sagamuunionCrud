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

  constructor(private ms: MembersService) { }

  ngOnInit() {
    this.authListenerSubs =  this.ms.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.memberIsAuthenticated = isAuthenticated;
    });
  }

 ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
 }

 onLogOut() {
  this.ms.memberLogOut();
 }
}
