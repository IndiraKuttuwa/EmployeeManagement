import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import {FormsModule,FormBuilder,FormGroup,Validators,AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {


  emp:Employee;
  name:string;
  location:string;
  email:string;
  mobile:string;
  eform:FormGroup;
  constructor(private service:EmployeeService, private fb:FormBuilder,private router: Router) { }

  ngOnInit() {
    this.emp=this.service.toBeEdited;
    this.eform = this.fb.group({
      ename : [this.emp.name],
      eemail : [''],
      emobile : [''],
      elocation : ['']
      
    })
  }

  update()
  {
    
    this.service.update(this.emp);
    this.router.navigate(["employees"]);
  }

}








  
  
   
  

  
  
