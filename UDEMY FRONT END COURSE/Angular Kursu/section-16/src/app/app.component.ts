import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private cdref: ChangeDetectorRef) {
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError hatasini onlemek icin
  }
  title = 'section-16';
  news = 10;
  progress_value = 65;
  show = false;
  open = false;
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  getData() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

  openSide() {
    this.open = !this.open;
  }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nexStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  // Tab material selectedTabChange icin start
  ngAfterContentChecked() {
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError hatasini onlemek icin
    this.cdref.detectChanges();
  }
  tabChange(index: number | null) {
    console.log(index);
  }
  // Tab material selectedTabChange icin end
}
