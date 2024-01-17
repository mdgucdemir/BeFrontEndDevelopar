import { Component } from '@angular/core';

export interface TableData {
  [key: string]: any;
  name: string;
  age: number;
  job: string;
  employed: string;
}
export interface TableHeader {
  key: string;
  label: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  data: TableData[] = [
    { name: 'Mehmet', age: 29, job: 'Mechatronics Engineer', employed: 'No' },
    { name: 'Deniz', age: 33, job: 'Frontend Developer', employed: 'Yes' },
    { name: 'Julia', age: 27, job: 'Doctor', employed: 'Yes' },
    { name: 'Frank', age: 39, job: 'Police', employed: 'No' },
  ];

  headers: TableHeader[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Salary Satisfaction' },
  ];
}
