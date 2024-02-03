import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    // NG0100: ExpressionChangedAfterItHasBeenCheckedError hatasini onlemek icin constructor(private cdref: ChangeDetectorRef) {}
    // this.filteredStates = this.stateCtrl.valueChanges.pipe(
    //   startWith(''),
    //   map((state) => (state ? this._filterStates(state) : this.states.slice()))
    // );
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

  // getData() {
  //   this.show = true;
  //   setTimeout(() => {
  //     this.show = false;
  //   }, 3000);
  // }

  // openSide() {
  //   this.open = !this.open;
  // }

  // step = 0;
  // setStep(index: number) {
  //   this.step = index;
  // }
  // nexStep() {
  //   this.step++;
  // }
  // prevStep() {
  //   this.step--;
  // }

  // // Tab material selectedTabChange icin start
  // ngAfterContentChecked() {
  //   // NG0100: ExpressionChangedAfterItHasBeenCheckedError hatasini onlemek icin
  //   // this.cdref.detectChanges();
  // }
  // tabChange(index: number | null) {
  //   console.log(index);
  // }
  // // Tab material selectedTabChange icin end

  // selectedValue: string = '';

  // options: string[] = ['Angular', 'React', 'Vue'];
  // objectOptions = [{ name: 'C#' }, { name: 'Node Js' }, { name: 'Python' }];

  // showIt(subject: Backend): string {
  //   return subject ? subject.name : '';
  // }

  // stateCtrl = new FormControl('');
  // filteredStates: Observable<State[]>;
  // states: State[] = [
  //   {
  //     name: 'Arkansas',
  //     population: '2.978M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
  //   },
  //   {
  //     name: 'California',
  //     population: '39.14M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
  //   },
  //   {
  //     name: 'Florida',
  //     population: '20.27M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
  //   },
  //   {
  //     name: 'Texas',
  //     population: '27.47M',
  //     // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
  //     flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
  //   },
  // ];
  // private _filterStates(value: string): State[] {
  //   const filterValue = value.toLowerCase();

  //   return this.states.filter((state) =>
  //     state.name.toLowerCase().includes(filterValue)
  //   );
  // }

  // minDate = new Date();
  // maxDate = new Date('feb 20, 2024');

  // dateFilter = (date: any) => {
  //   const day = date.getDay();
  //   return day != 0;
  // };

  openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackBar.open(message, action, { duration: 5000 });

    snackbarRef.afterDismissed().subscribe(() => {
      console.log('Memo');
    });

    snackbarRef.onAction().subscribe(() => console.log('Deno'));
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { name: 'Intel I7 14700k' },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('afterClosed calisiyeeh');
    });
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableData = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showRowData(row: PeriodicElement) {
    console.log(row);
  }
  myFilter(event: any) {
    this.tableData.filter = event.target.value.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.tableData.sort = this.sort;
    this.tableData.paginator = this.paginator;
  }
}
