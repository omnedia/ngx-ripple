import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'om-ripple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-ripple.component.html",
  styleUrl: "./ngx-ripple.component.scss",
})
export class NgxRippleComponent {
  @Input("styleClass")
  styleClass?: string;

  @Input("rippleColor")
  set rippleColor(color: string) {
    this.style["--om-ripple-color"] = color;
  }

  @Input("rippleBorderColor")
  set rippleBorderColor(color: string) {
    this.style["--om-ripple-border-color"] = color;
  }

  @Input("animationDuration")
  set animationDuration(duration: string) {
    this.style["--om-ripple-animation-duration"] = duration;
  }

  style: any = {};
}
