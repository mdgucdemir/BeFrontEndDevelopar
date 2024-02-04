import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Camping',
      imageUrl: '/assets/camping.jpg',
      username: 'Mehmet Deniz',
      content: 'let`s camping guys',
    },
    {
      title: 'Paragliding',
      imageUrl: '/assets/paragliding.jpg',
      username: 'Mehmet Deniz',
      content: 'Paragliding times guys',
    },
    {
      title: 'Surf',
      imageUrl: '/assets/surf.jpg',
      username: 'Mehmet Deniz',
      content: 'let`s surfing guys',
    },
  ];
}
