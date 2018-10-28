import {Injectable} from '@angular/core';
import { Employee } from 'src/Models/employee.model';
@Injectable()
export class EmployeeListService
{
    private employeeList:Employee[]=[
        {
            id:101,
            name:'Prithwi',
            gender:'male',
            phonenumber:8340203933,
            dateofbirth:new Date('10/06/1993'),
            email:'prethwiraj06@gmail.com',
            imagePath:'assets/Images/img1.jpg',
            department:3
        },
        {
            id:102,
            name:'Shiv',
            gender:'male',
            phonenumber:8340203933,
            dateofbirth:new Date('10/06/1993'),
            email:'shiv@gmail.com',
            imagePath:'assets/Images/img2.JPG',
            department:8
        },
        {
            id:103,
            name:'Rahul',
            gender:'male',
            phonenumber:8340203933,
            dateofbirth:new Date('06/10/1993'),
            email:'rahul@gmail.com',
            imagePath:'assets/Images/img3.jpg',
            department:1
        }

    ]
    getAllEmployees():Employee[]
    {
        return this.employeeList;
    }
    getEmployeeById(id:number):Employee
    {
        return this.employeeList.find(e=>e.id==id);
    }
    saveEmployee(employee:Employee)
    {
        this.employeeList.push(employee);
    }
    
}