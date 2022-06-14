import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  faBars: IconDefinition = faBars;
  toggleBtnState: boolean = false;
  itemsArray = [
    { name: "O mnie", target: "aboutme" },
    { name: "Blog", target: "blog" },
    { name: "Sklep", target: "shop" },
    { name: "YouTube", target: "youtube"}
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.switchBackgroud();
  }

  setLogoBehaviour(): void {
    if ( this.router.url == '/' || this.router.url == "") {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    }
    else 
      window.location.href = '';
  }

  toggleNavItems(): void {
    const navbar: HTMLElement = document.querySelector('.navbar')!;
    const items: HTMLElement = document.querySelector('.navbar__items')!;
    const toggleBtn: HTMLElement = document.querySelector('.navbar__toggleBtn')!;
    const currentHeight: number = document.documentElement.scrollTop;
    
    this.toggleBtnState = !this.toggleBtnState; // change state of toggleBtn
    
    items?.classList.toggle('showItems');
    toggleBtn?.classList.toggle('navbar__toggleBtn--color')

    if (currentHeight == 0) navbar?.classList.toggle('navbar--bgColor');
  }

  private switchBackgroud(): void {
    const navbar: HTMLElement = document.querySelector('.navbar')!;
    const toggleBtn: HTMLElement = document.querySelector('.navbar__toggleBtn')!;

    window.addEventListener('scroll', () => {
      let currentHeight: number = document.documentElement.scrollTop;

      if (currentHeight == 0 && this.toggleBtnState) toggleBtn?.classList.remove('navbar__toggleBtn--scroll');

      // if toggleBtnState is true -> do nothing with styles
      if (currentHeight != 0 && this.toggleBtnState == false) {
        navbar?.classList.add('navbar--bgColor');
        toggleBtn?.classList.add('navbar__toggleBtn--scroll');
      }
      else {
        if (this.toggleBtnState == false) {
          navbar?.classList.remove('navbar--bgColor');
          toggleBtn?.classList.remove('navbar__toggleBtn--scroll');
        }
      }
    });
  }
}
