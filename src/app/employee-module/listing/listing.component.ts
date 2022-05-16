import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee/employee.service';
import { GlobalService } from 'src/app/_services/global/global.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, public globalService: GlobalService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(result => {
      this.employees = result
      console.log(result)
    })
  }
  update(modalName: any, employee: any) {
    this.globalService.triggerModal(modalName)
    this.employee = employee
  }
  updateEmployee() {
    this.employeeService.update(this.employee).subscribe(result => {
      this.globalService.close();
      this.globalService.showSuccess("employer a été modifier avec succée")
      console.log(result)
    })
  }
  supprimer(id: any) {
    this.employeeService.delete(id).subscribe(data => {
      this.globalService.showSuccess("Employer supprimer avec succée")
      this.employees = this.employees.filter(item => item.id != id)
    })
  }

}
