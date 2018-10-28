import {Component, Input, OnChanges,SimpleChanges,Output,EventEmitter} from '@angular/core';
import { Employee } from 'src/Models/employee.model';

@Component({
    selector:'displayEmployeeList',    
    templateUrl:'./displayEmployeeList.component.html',
    styleUrls:['./displayEmployeeList.component.css']
})
export class DisplayEmployeeListComponent 
{
    @Input() employee; 
}