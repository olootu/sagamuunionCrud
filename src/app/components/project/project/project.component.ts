import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import {Wordpress} from '../../../models/wordpress.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  projects:Wordpress[] = [];
  constructor(private http:ProjectService) { }

  ngOnInit() {
    this.http.getProjects()
    .subscribe( (data:Wordpress[]) => {
      console.log(data);
      this.projects = data;
    })
  }

}
