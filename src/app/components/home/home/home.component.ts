import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MembersService } from 'src/app/core/members.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

title: String = 'Sagamu Union';

events: any[] = [];


slides:any[] = [
  {
    image: '../../../assets/AKARIGBO-of-Remoland.jpg'
  },

  {
    image: '../../../assets/ewusi2.png'
  },
  {
    image: '../../../assets/elepe-oba-osiberu.jpg'
  },

];


  constructor(private ms: MembersService) { }

  ngOnInit() {
   this.ms.getJson()
   .subscribe(data => {
     this.events = data['events'];
   })
  }

}
