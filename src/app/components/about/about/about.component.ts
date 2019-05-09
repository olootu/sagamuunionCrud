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
  xBreakPoint: boolean = false;;

//   trustees: Executive[] = [
    // {name: 'A. Kehinde', title: 'Chief', position: '', img:'logo'},
    // {name: 'Musa O\'Balogun', title: 'Aremooba', position: '', img:'ewusi2'},
    // {name: 'Abiola Ogunkoya', title: 'Chief', position: '', img:'logo'},
    // {name: 'Lai Soile', title: 'Dr (Chief)', position: '', img:'ewusi2'}
// ];

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
    console.log( this.xBreakPoint)
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
       // handle XSmall breakpoint
        // handle Small breakpoint
        this.xBreakPoint = true;
        console.log( this.xBreakPoint)
      }
      if (result.breakpoints[Breakpoints.Small]) {
      
      }
      if (result.breakpoints[Breakpoints.Medium]) {
      // handle Medium breakpoint
      }
    });
    

    // console.log('hghj', this.executives)
  }

}
