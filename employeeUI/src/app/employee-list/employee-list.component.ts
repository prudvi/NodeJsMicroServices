import { Utility } from './../util/utility';
import { EmployeeRestService } from './../services/employee-rest.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription,Observable, of } from 'rxjs';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit, OnDestroy {

	employeeList: any = [];

	emListSubscibe: Subscription;
	emDeletetSubscibe: Subscription;
	constructor(private empS :EmployeeRestService) { }

	ngOnInit() {
		this.getEmployees();
	}

	getEmployees() {
		this.employeeList = [];
		this.emListSubscibe = this.empS.getEmployeeList().subscribe((data: {}) => {
			this.employeeList = data;
		});
	}

	deleteEmployee(empCode) {
		this.emDeletetSubscibe = this.empS.deleteEmployeeDetails(empCode).subscribe((data: {}) => {
			this.employeeList= this.employeeList.filter(item => item.employeeCode !== empCode);     
		});
		
	}

	ngOnDestroy() {
		//this.emListSubscibe.unsubscribe();
		//this.emDeletetSubscibe.unsubscribe();
	}
}
