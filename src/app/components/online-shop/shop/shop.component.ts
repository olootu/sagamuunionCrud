import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { EcwidLoaderService } from '../../../core/ecwid-loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

@ViewChild('productBrowse') productBrowseEl: ElementRef;

@Input() siteId: string;

constructor(private ecwidLoader: EcwidLoaderService) { }

ngOnInit() {}

ngAfterViewInit() {
  this.ecwidLoader.init(this.productBrowseEl);
}

ngOnDestroy() {
   this.ecwidLoader.destroy();
}

}
