import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  
  faBars = faBars;
  toggleBtnState = false;
  itemsArray = [
    'O mnie',
    'Sklep',
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
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      let currentHeight = document.documentElement.scrollTop;

      // if toggleBtnState is true -> do nothing with background color
      if (currentHeight != 0 && this.toggleBtnState == false) {
        navbar?.classList.add('navbar--bgColor');
      }
      else {
        if (this.toggleBtnState == false) {
          navbar?.classList.remove('navbar--bgColor');
        }
      }
    });
  }

  toggleNavItems() {
    const navbar = document.querySelector('.navbar');
    const items = document.querySelector('.navbar__items');
    const currentHeight = document.documentElement.scrollTop;
    
    this.toggleBtnState = !this.toggleBtnState; // change state of toggleBtn
    items?.classList.toggle('showItems');

    if (currentHeight == 0) {
      navbar?.classList.toggle('navbar--bgColor');
    }
  }

  
  ngOnInit(): void {
    this.switchBackgroud();
  }
}
