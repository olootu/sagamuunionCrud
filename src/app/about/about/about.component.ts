import { Component, OnInit } from '@angular/core';
import { Executive } from './../../models/executive.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  executives: Executive[] = [
      {name: 'Ola Ogunyemi', title: 'Chief', position: 'President', img:'logo'},
      {name: 'Soji Soda', title: 'Mr', position: 'Gen Secretary', img:'ewusi2'},
      {name: 'Tolu Akinmolayan', title: 'Mrs', position: 'Social Secretary', img:'ewusi2'},
      {name: 'Ola Ogunyemi', title: 'Chief', position: 'President', img:'logo'},
      {name: 'Soji Soda', title: 'Mr', position: 'Gen Secretary', img:'ewusi2'},
      {name: 'Ola Ogunyemi', title: 'Chief', position: 'President', img:'logo'},
      {name: 'Soji Soda', title: 'Mr', position: 'Gen Secretary', img:'ewusi2'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
