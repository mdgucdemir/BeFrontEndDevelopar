import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/ui-models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  studentId: string | null | undefined;
  student: Student = {
    Id: '',
    FirstName: '',
    LastName: '',
    DateOfBirth: '',
    Email: '',
    Mobile: 0,
    ProfileImageUrl: '',
    gender: '',
    address: '',
  };

  constructor(
    private readonly studentService: StudentService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('id');
      this.studentService.getStudent(this.studentId).subscribe(
        (success) => {
          this.student = success;
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
