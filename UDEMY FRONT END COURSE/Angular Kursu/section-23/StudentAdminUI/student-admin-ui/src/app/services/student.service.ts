import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/ui-models/student.model';

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
    studentData: Student
  ): Observable<Student> {
    return this.httpClient.put<Student>(
      this.baseApiUrl + '/students/' + id,
      studentData
    );
  }

  deleteStudent(id: string | null | undefined): Observable<Student> {
    return this.httpClient.delete<Student>(this.baseApiUrl + '/students/' + id);
  }
}
