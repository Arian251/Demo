import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError} from 'rxjs/operators';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getStudents() {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(ServerHttpService.handleError));
  }

  public getStudent(studentId: number) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(ServerHttpService.handleError));
  }

  public getRandomStudent() {
    const url = `https://randomuser.me/api/?results=1`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(ServerHttpService.handleError));
  }

  public addStudent(data: Student) {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(ServerHttpService.handleError));
  }

  public modifyStudent(studentId: number, data: Student) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient
      .put<any>(url, data, this.httpOptions)
      .pipe(catchError(ServerHttpService.handleError));
  }

  public deleteStudent(studentId: number) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient.delete<any>(url).pipe(catchError(ServerHttpService.handleError));
  }

  public getComments() {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(ServerHttpService.handleError));
  }

  public addPosts(data) {
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(ServerHttpService.handleError));
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
