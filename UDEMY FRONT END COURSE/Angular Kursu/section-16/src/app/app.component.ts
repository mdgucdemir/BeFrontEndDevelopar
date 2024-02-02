import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Backend {
  name: string;
}

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError hatasini onlemek icin constructor(private cdref: ChangeDetectorRef) {}
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    );
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
    // this.cdref.detectChanges();
  }
  tabChange(index: number | null) {
    console.log(index);
  }
  // Tab material selectedTabChange icin end

  selectedValue: string = '';

  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [{ name: 'C#' }, { name: 'Node Js' }, { name: 'Python' }];

  showIt(subject: Backend): string {
    return subject ? subject.name : '';
  }

  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;
  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }

  minDate = new Date();
  maxDate = new Date('feb 20, 2024');

  dateFilter = (date: any) => {
    const day = date.getDay();
    return day != 0;
  };
}
