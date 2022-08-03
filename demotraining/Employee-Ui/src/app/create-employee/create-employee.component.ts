import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../slim/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  ename: any;
  eaddress:any;
  esal:any;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) {
      console.log(this.ename,"Ename Value");
     }

  ngOnInit(): void {
    this.employeeService.getEmployeesList();
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      // this.goToEmployeeList();
    },
    error => console.log(error));
  }

  // goToEmployeeList(){
  //   this.router.navigate(['/employees']);
  // }

  
  onSubmit(){
    // console.log(this.employee);

    this.employee.setEaddress(this.eaddress);
    this.employee.setEname(this.ename);
    this.employee.setEsal(this.esal);
    this.employee.setEno(0);
    console.log(this.employee,"Employee Object");
    this.saveEmployee();
  }
}