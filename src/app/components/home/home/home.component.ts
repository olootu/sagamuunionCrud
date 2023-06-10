import { Component, OnInit, OnDestroy } from '@angular/core';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MembersService } from 'src/app/core/members.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: String = 'Sagamu Union';
  id = '17622029';

  events: any[] = [];


  slides: any[] = [
    {
      image: '../../../assets/missSag.jpg'
    },
    {
      image: '../../../assets/AKARIGBO-of-Remoland.jpg'
    },
    {
      image: '../../../assets/ewusi.jpg'
    },
    {
      image: '../../../assets/sagaday2.jpg'
    },
    {
      image: '../../../assets/sourvenir.jpg'
    },
    {
      image: '../../../assets/beach4.jpg'
    }

  ];


  constructor(private ms: MembersService) { }

  ngOnInit() {
    this.ms.getJson()
      .subscribe(data => {
        this.events = data['events'];
      })
  }

}
