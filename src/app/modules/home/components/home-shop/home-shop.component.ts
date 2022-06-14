import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-shop',
  templateUrl: './home-shop.component.html',
  styleUrls: ['./home-shop.component.scss'],
})

export class HomeShopComponent implements OnInit {
  
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  btnName = 'Pełna oferta';
  fakeItemArr = [
    {
      path: './../../../../../assets/images/example-shirts/example1.jpg',
      name: 'Koszula hawajska 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu enim erat. Fusce mollis ac elit in rutrum.',
      price: 89.99,
    },
    {
      path: './../../../../../assets/images/example-shirts/example2.jpg',
      name: 'Koszula hawajska 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu enim erat. Fusce mollis ac elit in rutrum.',
      price: 79.99,
    },
    {
      path: './../../../../../assets/images/example-shirts/example3.jpg',
      name: 'Koszula hawajska 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu enim erat. Fusce mollis ac elit in rutrum.',
      price: 69.99,
    },
    {
      path: './../../../../../assets/images/example-shirts/example4.jpg',
      name: 'Koszula hawajska 4',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu enim erat. Fusce mollis ac elit in rutrum.',
      price: 72.99,
    },
    {
      path: './../../../../../assets/images/example-shirts/example5.jpg',
      name: 'Koszula hawajska 5',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu enim erat. Fusce mollis ac elit in rutrum.',
      price: 80.49,
    },
  ];

  constructor() {}

  handlePrevItem() {
    const lastItem = this.fakeItemArr.slice(-1).pop();
    this.fakeItemArr.pop(); // remove last item
    this.fakeItemArr.unshift(lastItem!); // add last item to the beginning of an array
  }

  handleNextItem() {
    const firstItem = this.fakeItemArr[0];
    this.fakeItemArr.shift(); // remove first item
    this.fakeItemArr.push(firstItem!); // add first item to the end of array
  }

  ngOnInit(): void {}
}
