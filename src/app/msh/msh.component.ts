import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-msh',
  templateUrl: './msh.component.html',
  styleUrls: ['./msh.component.scss']
})
export class MshComponent implements OnInit {
  year: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
		autoplaySpeed: 1000,
    navSpeed: 700,
    navText: [''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
