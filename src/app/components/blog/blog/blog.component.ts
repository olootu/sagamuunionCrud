import { Component, OnInit } from '@angular/core';
import { Wordpress } from '../../../models/wordpress.model';
import { BlogService } from '../blog.service';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  content: Wordpress[] = [];
  isMobilePhone: boolean;
  isMobileLandscape: boolean;
  selected = 'DESC';
  length = 100;
  pageSize = 2;
  pageSizeOptions: number[] = [2, 5];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private http: BlogService, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobilePhone = true;
        this.isMobileLandscape = false;
      }
    });

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobileLandscape = true;
        this.isMobilePhone = false;
      }
    });

  }

  ngOnInit() {
    this.http.getWpApi()
      .subscribe((data: Wordpress[]) => {
        console.log(data);
        this.content = data;
      })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
