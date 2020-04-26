import { Injectable, ElementRef } from '@angular/core';
import { NgProgressRef, NgProgress } from '@ngx-progressbar/core';
import { ScriptLoaderService } from './script-loader.service';

@Injectable({
  providedIn: 'root'
})
export class EcwidLoaderService {

  progressRef: NgProgressRef;
  private productScriptNode: HTMLScriptElement;

  constructor(
      private progress: NgProgress, 
      private scripBrowsetLoader: ScriptLoaderService
    ) { }

  private loadingPromise: Promise<any>;
  private loaded = false;

  public init(product: ElementRef) {
    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
   
    this.loadingPromise = this.scripBrowsetLoader.load('https://app.ecwid.com/script.js?17622029')
      .then(() => {
        window['ecwidLoaded'] = true;
        window['ecwid_script_defer'] = true;
        window['ecwid_dynamic_widgets'] = true;
        this.loadProduct(product);
      });
  }

  destroy() {
    this.completeProgress();
    var Ecwid: any = window['Ecwid'];

    if (typeof Ecwid != 'undefined') {
      if(Ecwid.destroy) Ecwid.destroy();
      this.removeElementsByClassName("ecwid-minicart");
      this.removeElementsByClassName("ecwid-pswp");
      this.removeElementsByClassName("ecwid-Product");
    }
    window['ecwidLoaded'] = false;
  }

  private loadProduct(product: ElementRef) {
    var ecwidProductBrowseEl = product.nativeElement;
    this.productScriptNode = document.createElement('script');
    this.productScriptNode.type = 'text/javascript';
    this.productScriptNode.charset = 'utf-8';
    this.productScriptNode.textContent='xProductBrowser()';
    ecwidProductBrowseEl.appendChild(this.productScriptNode) ;
    this.completeProgress();
}

  private completeProgress() {
    this.progressRef.complete();
  }

  private removeElementsByClassName(className: string) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }
  }

}