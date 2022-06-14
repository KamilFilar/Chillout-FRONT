import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})

export class HomeBlogComponent implements OnInit {
  
  imgArray = [
    {
      name: "A po pracy trochę pracy",
      path: "./../../../../../assets/images/home-blog1.webp"
    },
    {
      name: "Podróże małe i duże",
      path: "./../../../../../assets/images/home-blog2.webp"
    },
    {
      name: "Wczoraj i jutro",
      path: "./../../../../../assets/images/home-blog3.webp"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
