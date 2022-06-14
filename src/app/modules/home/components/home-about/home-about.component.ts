import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})

export class HomeAboutComponent implements OnInit {

  imgPath = './../../../../../assets/images/author-photo.webp';

  constructor() { }

  ngOnInit(): void {
  }

}
