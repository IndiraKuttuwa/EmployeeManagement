import { Component, OnInit, Input, OnChanges, } from '@angular/core';
import {Employee} from "../Employee";
import {FilterPipe} from "../filter.pipe";
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {

  title:String="Employees List";
  public count:number;
  new:Employee=null;
  search:string="";
  employees:Employee[] ;

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {

  this.employees= this.service.getEmployees();
  
  this.count = this.employees.length;
  
    

  }

  show(id:number){
    this.service.display(id);
   }
   edit(id:number){
     this.service.edit(id);
   }
   delete(id:number){
     this.service.delete(id);
   }
    
}





  

  

  
  
  











  

   
  
 
  
  

  
 

 
  // get Employees_updated():Employee[]{
   


  
  //   return this.employees;
  // }



