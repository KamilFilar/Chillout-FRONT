import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})

export class HomeBlogComponent implements OnInit {

  imgArr = [
    "A po pracy trochę pracy",
    "Podróże małe i duże",
    "Wczoraj i jutro"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
