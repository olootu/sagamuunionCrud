import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  projects:any = [];
  constructor(private http:ProjectService) { }

  ngOnInit() {
    this.http.getProjects()
    .subscribe( data => {
      console.log(data);
      this.projects = data;
    })
  }

}
