import { Component, OnInit } from '@angular/core';
import {Member} from './members.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

title: String = 'Sagamu Union';
  constructor() { }

  ngOnInit() {
  }

}
