import { Injectable } from '@angular/core';
import {Employee} from './Employee';
import {EmployeeslistComponent} from './employeeslist/employeeslist.component';

import {Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  curr:Employee;
  toBeEdited:Employee;
  toBeDeleted:Employee;
  
  chk= new Employee(4,"Amy","Hyderabad","amy@mail.com","9678983547");

  employees:Employee[]= [
    

    {
      "id" : 1,
      "name" : "Ram",
      "location": "Bangalore",
      "email": "ram@mail.com",
      "mobile":"9867512345"
    },
    {
      "id":2,
      "name" : "Raj",
      location:"Chennai",
      email:"raj@mail.com",
      mobile:"7867534521"
    },

    {
      "id" : 3,
      "name" : "Vinay",
      location: "Pune",
      email: "vinay@mail.com",
      mobile:"9975287450"
    }
   
    
  ]

  
  getEmployees():Employee[]{
    
    return this.employees;
  }

  add(emp:Employee){
    
   this.employees.push(emp);
   
    
  }

  display(id:number){
    this.curr=this.employees.find(emp => emp.id == id);
 
 }
 edit(id:number){
   this.toBeEdited=this.employees.find(emp=>emp.id == id);
   
 }
 update(emp:Employee){
  this.employees[this.employees.indexOf(this.toBeEdited)]= emp;
 }
 delete(id:number){
  
   this.toBeDeleted=this.employees.find(emp=>emp.id==id);
   
   this.employees.splice(this.employees.indexOf(this.toBeDeleted),1);
   
 
 }







  constructor() {
    this.employees.sort((a,b)=>(a.id < b.id ? -1:1));

  }
}






// import { of } from 'rxjs/observable/of';




  
 

  
  






// @Injectable()

// export class AddService {
//   // employeeReplaySubject = new ReplaySubject<Employee>(1);
//   // employeesReplaySubject = new ReplaySubject<Employee[]>(1);
//   //  setUser(e: Employee){
//   //    this.employeeReplaySubject.next(e);
//   //  }
//   //  setEmployees(em:Employee[])
//   //  {
//   //    this.employeesReplaySubject.next(em);
//   //  }
  
//   // getEmployees():Employee[]{
//   //   // this.employees.push(this.chk);
//   //   console.log(this.employees.length);
//   //   return this.employees;
//   // }
 
  
  
//   // public emp:Employee;
//   // public receivedActivity: EventEmitter<Employee>;

//   // callEmployeeChange(emp:Employee):void{
//   //   this.emp=emp;
//   //   this.receivedActivity.emit(emp);
    
//   // }

//   constructor()
//    {
     
//     }
  
  
