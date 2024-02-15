import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private studenService: StudentService) {}

  ngOnInit(): void {
    // debugger;
    this.studenService.getStudents().subscribe(
      (success) => {
        console.log(success);
      },
      (err) => {}
    );
  }
}
