import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'mdBiking',
      content: 'I drove very fast',
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mdMountain',
      content: 'I climbed mountain last year',
    },
    {
      title: 'Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'mdTree',
      content: 'What a wonderful world',
    },
  ];
}
