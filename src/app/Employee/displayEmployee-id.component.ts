import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListService } from 'src/Services/employeeList.service';
import { Employee } from 'src/Models/employee.model';
@Component({
    templateUrl:'./displayEmployee-id.component.html',
    styleUrls:['./displayEmployee-id.component.css']
})
export class DisplayEmpolyeeBasedOnId implements OnInit
{
    employee:Employee;
    constructor(private _route:ActivatedRoute,private _employeeService:EmployeeListService){

    }
    ngOnInit(){
       const employeeId = +this._route.snapshot.params['id'];
       this.employee=this._employeeService.getEmployeeById(employeeId);
    }
}