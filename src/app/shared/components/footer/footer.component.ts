import { Component } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  
  faFacebookF: IconDefinition = faFacebookF;
  faInstagram: IconDefinition = faInstagram;
  faYoutube: IconDefinition = faYoutube;
  iconsArr: Array<IconDefinition> = [faFacebookF, faInstagram, faYoutube];
  hrefsArr = [
    { path: "Kontakt", name: "Kontakt" },
    { path: "Regulamin", name: "Regulamin" },
    { path: "Wspolpraca", name: "Współpraca" }
  ];

  currentYear: number = new Date().getFullYear();

}
