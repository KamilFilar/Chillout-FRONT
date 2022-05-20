import { Component, Input, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-carusel-item',
  templateUrl: './carusel-item.component.html',
  styleUrls: ['./carusel-item.component.scss']
})

export class CaruselItemComponent implements OnInit {

  @Input() photoPath!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;

  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
