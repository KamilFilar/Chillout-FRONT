import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  
  itemsArray = [
    'O mnie',
    'Shop',
    'Blog',
    'YouTube'
  ];

  constructor(
    private router: Router
  ) {}

  setLogoBehaviour() {
    if ( this.router.url == '/' || this.router.url == "") {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    }
    else 
      window.location.href = '';
  }

  switchBackgroud() {
    const elem = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      let currentHeight = document.documentElement.scrollTop;

      return currentHeight != 0
        ? elem?.classList.add('navbar--color')
        : elem?.classList.remove('navbar--color');
    });
  }

  ngOnInit(): void {
    this.switchBackgroud();
  }
}
