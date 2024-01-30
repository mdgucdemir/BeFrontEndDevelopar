import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'section-16';
  news = 10;
  progress_value = 65;
  show = false;
  open = false;

  getData() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

  openSide() {
    this.open = !this.open;
  }
}
