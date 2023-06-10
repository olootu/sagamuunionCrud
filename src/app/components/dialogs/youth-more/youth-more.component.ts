import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-youth-more',
  templateUrl: './youth-more.component.html',
  styleUrls: ['./youth-more.component.scss']
})
export class YouthMoreComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public youth: any) { }

  ngOnInit() {
  }

}
