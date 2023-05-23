
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      const optionsComponent = this.elementRef.nativeElement.ownerDocument.getElementById('options');
      console.log(optionsComponent)
      if (optionsComponent) {
        const optionsComponentOffsetTop = optionsComponent.offsetTop;
        window.scrollTo({ top: optionsComponentOffsetTop, behavior: 'smooth' });
      }
    }
  }
}
