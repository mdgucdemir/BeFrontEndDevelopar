import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css'],
})
export class ListsHomeComponent {
  numbers = [
    { value: 50, label: 'Customers' },
    { value: 3500, label: 'Giro' },
    { value: 65, label: 'Comments' },
  ];

  images = [
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Dresser Dresser Dresser Dresser Dresser',
    },
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Couch Couch Couch Couch Couch Couch ',
    },
  ];
}
