import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {
  
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  iconsArr = [faFacebookF, faInstagram, faYoutube];
  hrefsArr = [
    { path: "Kontakt", name: "Kontakt" },
    { path: "Regulamin", name: "Regulamin" },
    { path: "Wspolpraca", name: "Współpraca" }
  ];

  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
