import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestService {

  constructor(private http: HttpClient) { }

  // const endpoint = 'http://localhost:3000/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getEmployeeList(): Observable<any> {
    return this.http.get('employeesList').pipe(
      map(this.extractData));
  }
  
  getEmployee(id): Observable<any> {
    return this.http.get( 'employee/' + id).pipe(
      map(this.extractData));
  }
  
  addEmployee (employee): Observable<any> {
    console.log(employee);
    return this.http.post<any>( 'employee', JSON.stringify(employee), this.httpOptions).pipe(
      tap((product) => console.log(`added employee w/ id=${employee.employeeCode}`)),
      catchError(this.handleError<any>('addEmployee'))
    );
  }
  
  updateEmployee (id, employee): Observable<any> {
    return this.http.put( 'employee/' + id, JSON.stringify(employee), this.httpOptions).pipe(
      tap(_ => console.log(`updated employee id=${id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }
  
  deleteEmployeeDetails (id): Observable<any> {
    return this.http.delete<any>( 'employee/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted employee id=${id}`)),
      catchError(this.handleError<any>('deleteEmployee'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
