import { Component, OnInit } from '@angular/core';
import { Executive } from './../../../models/executive.model';
import { MembersService } from 'src/app/core/members.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  executives: any;
  trustees: any;
  eldersForum: any;
  xBreakPoint: boolean = false;

  constructor(
    private ms: MembersService,
    public breakpointObserver: BreakpointObserver
    ) { }

  ngOnInit() {
   this.ms.getJson()
    .subscribe(data => {
      console.log('Excos', data)
      this.executives = data['executives'];
      this.trustees = data['trustees'];
      this.eldersForum = data['eldersForum']
    });
    
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.xBreakPoint = true;
      }
      if (result.breakpoints[Breakpoints.Small]) {
      
      }
      if (result.breakpoints[Breakpoints.Medium]) {
      }
    });
  }

}
