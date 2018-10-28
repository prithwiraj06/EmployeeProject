import { Component,OnInit } from "@angular/core";
import { Employee } from "../../Models/employee.model";
import { EmployeeListService } from "src/Services/employeeList.service";
import {Router} from '@angular/router';
@Component({
    selector:'employeeList',
    templateUrl:'employeeList.component.html',
    styleUrls:['employeeList.component.css']
})
export class EmployeeListComponent implements OnInit
{
    employees:Employee[];
    constructor(private _employeeListService:EmployeeListService,private _router:Router)
    {
        
    }
    ngOnInit()
    {
        this.employees=this._employeeListService.getAllEmployees();
    }
    getEmployeeWithId(id:number)
    {
        this._router.navigate(['/employees',id]);
    }
}