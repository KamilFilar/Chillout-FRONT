import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-youtube',
  templateUrl: './home-youtube.component.html',
  styleUrls: ['./home-youtube.component.scss'],
})

export class HomeYoutubeComponent implements OnInit {
  imgData = {
    href: 'https://www.youtube.com/channel/UChHMD9GlKW96pPLso4_DNZg',
    path: './../../../../../assets/images/home-youtube.webp',
  };
  itemArr = [
    { name: 'Utworzenie kanału', date: '20.05.2022' },
    { name: 'Pierwszy film', date: '22.05.2022' },
    { name: '1000 subów', date: '26.06.2022' },
    { name: '100 000 subów', date: '24.12.2022' },
    { name: '1 konkurs', date: '05.01.2023' },
    { name: '250 000 subów', date: '15.05.2023' },
    { name: '1 meetup', date: '01.07.2023' },
    { name: '2 konkurs', date: '06.09.2023' },
  ];

  btnName = 'Nasza droga';

  constructor() {}

  ngOnInit(): void {}
}
