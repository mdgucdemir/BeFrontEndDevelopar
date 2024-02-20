import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Student } from '../models/ui-models/student.model';
import { AddStudentRequest } from '../models/api-models/addStudent.model';
import { UpdateStudentRequest } from '../models/api-models/updateStudent.model';
import { updateProfileImage } from '../models/api-models/profileImage.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseApiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/students');
  }

  getStudent(id: string | null | undefined): Observable<Student> {
    return this.httpClient.get<Student>(this.baseApiUrl + '/students/' + id);
  }
  updateStudent(
    id: string | null | undefined,
    studentData: any
  ): Observable<any> {
    const updateStudentRequest: UpdateStudentRequest = {
      FirstName: studentData.FirstName,
      LastName: studentData.LastName,
      DateOfBirth: studentData.DateOfBirth,
      Email: studentData.Email,
      Mobile: studentData.Mobile,
      ProfileImageUrl: studentData.ProfileImageUrl,
      gender: studentData.gender,
      address: studentData.address,
    };
    return this.httpClient.put<Student>(
      this.baseApiUrl + '/students/' + id,
      updateStudentRequest
    );
  }

  deleteStudent(id: string | null | undefined): Observable<Student> {
    return this.httpClient.delete<Student>(this.baseApiUrl + '/students/' + id);
  }

  addStudent(studentData: Student): Observable<Student> {
    const addStudentRequest: AddStudentRequest = {
      Id: studentData.Id,
      FirstName: studentData.FirstName,
      LastName: studentData.LastName,
      DateOfBirth: studentData.DateOfBirth,
      Email: studentData.Email,
      Mobile: studentData.Mobile,
      ProfileImageUrl: studentData.ProfileImageUrl,
      gender: studentData.gender,
      address: studentData.address,
    };

    return this.httpClient.post<Student>(
      this.baseApiUrl + '/students',
      addStudentRequest
    );
  }

  getImagePath(relativePath: string) {
    return `${this.baseApiUrl}/${relativePath}`;
  }

  uploadImage(id: string | null | undefined, file: any): Observable<Student> {
    const updateProfileImageReques: updateProfileImage = {
      ProfileImageUrl: file.ProfileImageUrl,
    };
    return this.httpClient.put<Student>(
      this.baseApiUrl + '/students/' + id,
      updateProfileImageReques
    );
  }
}
