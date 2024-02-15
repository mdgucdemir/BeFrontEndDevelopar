import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/ui-models/student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  filterString = '';
  students: Student[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
  ];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studenService: StudentService) {}

  ngOnInit(): void {
    this.studenService.getStudents().subscribe((res) => {
      this.students = res;
      this.dataSource = new MatTableDataSource<Student>(this.students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterStudents() {
    this.dataSource.filter = this.filterString.trim().toLocaleLowerCase();
  }
}
