import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './slim/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
getEmployeeByName(id: any) {
  throw new Error('Method not implemented.');
}private baseURL = "http://localhost:8080/push";

constructor(private httpClient: HttpClient) { }

getEmployeesList(): Observable<Employee[]>{
  return this.httpClient.get<Employee[]>("http://localhost:8080/");
}

createEmployee(employee: Employee): Observable<Object>{
  const headers = { 'content-type': 'application/json'}
  // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  // const body=JSON.stringify(employee);
  const obj={
    "eno": null,
   "ename":"TTT",
   "esal":21,
   "eaddress":"sdds"
   };
  return this.httpClient.get("http://localhost:8080");
}

getEmployeeById(id: any): Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
}

updateEmployee(id: any, employee: Employee): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, employee);
}

deleteEmployee(id: any): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
