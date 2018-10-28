import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from '../Employee/createEmployee.component';

@Injectable()
export class CreateEmployeeCanDeactivateGaurd implements CanDeactivate<CreateEmployeeComponent>
{
    canDeactivate(component:CreateEmployeeComponent ): boolean
    {
        if(component.createEmployeeVariable.dirty)
        {
            return confirm('Are you sure do you want to leave the page ? ');
        }
        else
        {
            return true;
        }
    }
}