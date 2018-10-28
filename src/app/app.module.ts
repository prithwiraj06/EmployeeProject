import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employeeList.component';
import {RouterModule,Routes} from '@angular/router';
import { CreateEmployeeComponent } from './Employee/createEmployee.component';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from '../../node_modules/ngx-bootstrap/datepicker';
import {SelectRequiredValidatorDirective} from '../Shared/selectListRequired.directive';
import { ConfirmEqualValidatorDirective } from '../Shared/confirmPassword-equal-validator.directive';
import { EmployeeListService } from '../Services/employeeList.service';
import { DisplayEmployeeListComponent } from './Employee/displayEmployeeList.component';
import {CreateEmployeeCanDeactivateGaurd} from './Employee/createEmployee-can-deactivate-gaurd.service';
import { DisplayEmpolyeeBasedOnId } from './Employee/displayEmployee-id.component';


const appRoutes:Routes=[
  {path:'employeeList',component:EmployeeListComponent},
  {
    path : 'createEmployee',
    component:CreateEmployeeComponent,
    canDeactivate:[CreateEmployeeCanDeactivateGaurd]
  },
  {path:'employees/:id',component:DisplayEmpolyeeBasedOnId},
  {path : '',redirectTo:'/employeeList',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeListComponent,
    DisplayEmpolyeeBasedOnId
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeListService,CreateEmployeeCanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
