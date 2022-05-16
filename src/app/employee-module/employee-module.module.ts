import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeModuleRoutingModule } from './employee-module-routing.module';
import { ListingComponent } from './listing/listing.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListingComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeModuleRoutingModule,
    FormsModule
  ]
})
export class EmployeeModuleModule { }
