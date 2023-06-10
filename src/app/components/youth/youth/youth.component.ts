import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { YouthMoreComponent } from './../../dialogs/youth-more/youth-more.component';
import { MembersService } from './../../../core/members.service';


@Component({
  selector: 'app-youth',
  templateUrl: './youth.component.html',
  styleUrls: ['./youth.component.scss']
})
export class YouthComponent implements OnInit {

  constructor(private dialog: MatDialog, private ms: MembersService) { }
  youths: any[] = [];

  ngOnInit() {
    this.ms.getJson()
      .subscribe(data => {
        this.youths = data['youths'];
      })
  }

  youthDialog() {
    const dialogRef = this.dialog.open(YouthMoreComponent, {
      width: '50%',
      data: this.youths

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



}
