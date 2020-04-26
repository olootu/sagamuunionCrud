import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private scripts: string[] = []

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
  }

  load(scriptUrl: string, parent?: string) {
        return new Promise( (resolve, reject) => {
          if(this.scripts.find((script) => script === scriptUrl)) {
            resolve(true)
            return
          }
          if (isPlatformBrowser(this.platformId)) {
              let node: any = document.createElement('script');
              node.src = scriptUrl;
              node.type = 'text/javascript';
              node.async = true;
              node.charset = 'utf-8';
              node.setAttribute('data-cfasync',false);
              node.onload = () => setTimeout(() => resolve(true), 5000);

              node.onerror = (error: any) => reject(error);
              if(parent) document.getElementById(parent).appendChild(node);
              else document.getElementsByTagName('head')[0].appendChild(node);
              this.scripts.push(scriptUrl);
          };
        });
    }
}