import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})

export class NavItemComponent implements OnInit {

  @Input() text!: string;

  constructor() { }

  changeNavItemColor() {
    const listOfItems = document.querySelectorAll("a");

    window.addEventListener('scroll', () => {
      let currentHeight = document.documentElement.scrollTop;
      
      for (let i = 0; i < listOfItems.length; i++) {
        currentHeight != 0 
          ? listOfItems[i]?.classList.add('item--color')
          : listOfItems[i]?.classList.remove('item--color')
      }
    });
  }

  ngOnInit(): void {
    this.changeNavItemColor();
  }

}
