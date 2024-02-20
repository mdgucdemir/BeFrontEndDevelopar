import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
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

  onUpdate() {
    // debugger;
    this.studentService.updateStudent(this.studentId, this.student).subscribe(
      (succes) => {
        // debugger;
        this.snackbar.open('Students updated successfully.', undefined, {
          duration: 2000,
        });
        this.router.navigateByUrl('');
      },
      (error) => {
        this.snackbar.open("Student didn't updated!!!", undefined, {
          duration: 2000,
        });
      }
    );
  }

  onDelete() {
    this.studentService.deleteStudent(this.studentId).subscribe(
      (success) => {
        this.snackbar.open('Student deleted successfully.', undefined, {
          duration: 2000,
        });

        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 2000);
      },
      (error) => {
        this.snackbar.open("Student didn't deleted!!!", undefined, {
          duration: 2000,
        });
      }
    );
  }
}
