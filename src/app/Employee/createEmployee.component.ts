import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../Models/department.model';
import {Employee} from '../../Models/employee.model'
import {BsDatepickerConfig} from 'node_modules/ngx-bootstrap/datepicker'
import {Router} from '@angular/router';
import {EmployeeListService} from '../../Services/employeeList.service'

@Component({
    templateUrl:'./createEmployee.component.html'
})
export class CreateEmployeeComponent
{
    @ViewChild('employeeForm') public createEmployeeVariable:NgForm;
    photoPath:boolean=false;
    employee:Employee={
        id:null,
        name:null,
        isactive:null,
        gender:null,
        imagePath:null,
        dateofbirth:null,
        email:'',
        phonenumber:null,
        contactprefrences:null,
        department:0
    };
    
    bsdatepickerconfig:Partial<BsDatepickerConfig>;
    constructor(private _employeeListService:EmployeeListService,private _router:Router){
        this.bsdatepickerconfig=Object.assign({},
            {
                containerClass:"theme-dark-blue",
                showWeekNumbers:false,
                dateInputFormat:"DD/MM/YYYY"
            })

    }
    departments:Department[]=[
        {id:1,name:'HR'},
        {id:2,name:'IT'},
        {id:3,name:'Finance'},
        {id:4,name:'Admin'}
    ];
   
    toggleImage()
    {
        this.photoPath=!this.photoPath;
    }
    saveEmployee()
    {
        this._employeeListService.saveEmployee(this.employee);
        this._router.navigate(['employeeList']);
     
    }
}