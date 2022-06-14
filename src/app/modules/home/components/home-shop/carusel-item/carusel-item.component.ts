import { Component, Input } from '@angular/core';
import { faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carusel-item',
  templateUrl: './carusel-item.component.html',
  styleUrls: ['./carusel-item.component.scss']
})
export class CaruselItemComponent {

  @Input() photoPath!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;

  faShoppingCart: IconDefinition = faShoppingCart;

}
