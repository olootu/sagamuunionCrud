import { Component, OnInit } from '@angular/core';
import { Executive } from './../../../models/executive.model';
import { MembersService } from 'src/app/core/members.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  executives: any;
  trustees: any;

//   trustees: Executive[] = [
    // {name: 'A. Kehinde', title: 'Chief', position: '', img:'logo'},
    // {name: 'Musa O\'Balogun', title: 'Aremooba', position: '', img:'ewusi2'},
    // {name: 'Abiola Ogunkoya', title: 'Chief', position: '', img:'logo'},
    // {name: 'Lai Soile', title: 'Dr (Chief)', position: '', img:'ewusi2'}
// ];

  constructor(private ms: MembersService) { }

  ngOnInit() {
   this.ms.getJson()
    .subscribe(data => {
      console.log('Excos', data)
      this.executives = data['executives'];
      this.trustees = data['trustees']
    });

    // console.log('hghj', this.executives)
  }

}
