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
  isNewStudent: boolean = false;
  header: string = '';
  displayProfileImageUrl = '';

  constructor(
    private readonly studentService: StudentService,
    private readonly route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      //
      this.studentId = params.get('id');

      if (this.studentId === 'add') {
        // studentId == add ise add e gore
        this.isNewStudent = true;
        this.header = 'Add New Student';
        this.setImage();
      } else {
        // studentId != add ise update e gore
        this.isNewStudent = false;
        this.header = 'Update Student';
        this.studentService.getStudent(this.studentId).subscribe(
          (success) => {
            this.student = success;
            this.setImage();
          },
          (error) => {
            console.error(error);
            this.setImage();
          }
        );
      }
    });
  }

  onUpdate() {
    //
    this.studentService.updateStudent(this.studentId, this.student).subscribe(
      (succes) => {
        //
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

  onAdd() {
    //
    this.studentService.addStudent(this.student).subscribe(
      (succes) => {
        this.snackbar.open('Student added successfully.', undefined, {
          duration: 2000,
        });

        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 2000);
      },
      (error) => {
        this.snackbar.open("Student didn't add!!!", undefined, {
          duration: 2000,
        });
      }
    );
  }

  setImage() {
    if (this.student.ProfileImageUrl) {
      this.displayProfileImageUrl = this.student.ProfileImageUrl;
    } else {
      debugger;
      this.displayProfileImageUrl = '/assets/user.png';
    }
  }

  uploadImage(event: any) {
    //
    if (this.studentId) {
      const file: any = event.target.files[0];
      this.studentService.uploadImage(this.studentId, file).subscribe(
        (success) => {
          this.student.ProfileImageUrl;
          this.setImage();

          this.snackbar.open('Profile Image added successfully.', undefined, {
            duration: 2000,
          });
        },
        (error) => {
          this.snackbar.open("Profile Image didn't add!!!", undefined, {
            duration: 2000,
          });
        }
      );
    }
  }
}
