import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-vlibras',
  templateUrl: './vlibras.component.html',
  styleUrls: ['./vlibras.component.css'],
})
export class VlibrasComponent {
  @ViewChild('vlibrasToggleButton')
  vlibrasToggleButton!: ElementRef;
  vLibrasActive: boolean = false;

  constructor(
    private renderer: Renderer2,
  ) {
    this.initVLibras();
  }

  private initVLibras() {
    const vLibrasScript = this.renderer.createElement('script');
    vLibrasScript.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    vLibrasScript.onload = async () => {
      await new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    this.renderer.appendChild(document.body, vLibrasScript);
  }
}
