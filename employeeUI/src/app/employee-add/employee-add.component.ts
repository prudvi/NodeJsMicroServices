import { EmployeeRestService } from './../services/employee-rest.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { employeeItem } from './../interface/employeeItem';
import { ActivatedRoute ,Router } from '@angular/router'; 
import { Subscription,Observable, of } from 'rxjs';

@Component({
	selector: 'app-employee-add',
	templateUrl: './employee-add.component.html',
	styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit, OnDestroy {

	empCode: string;
	private subscription: Subscription;
	private updatesubscription: Subscription;

	model:any ;
	isEdit: Boolean = false;
	empSubscibe: Subscription;
	buttonText: string = "Add Employee";
	routeP:Subscription;

	constructor(private router:Router, private activatedRoute: ActivatedRoute, 
		private empS :EmployeeRestService) { 
		
	}


	ngOnInit() {
		let currentUrl = this.router.url;
		console.log(currentUrl);
		if (currentUrl === '/addEmployee') {
			// this.isEdit = false;
			// this.buttonText = "Add Employee";
			this.model = {};
		} else {
			this.routeP = this.activatedRoute.params.subscribe( params => {
				console.log(params);
				console.log(JSON.stringify(params));
				this.empCode = params.id;
				this.subscription = this.empS.getEmployee(this.empCode).subscribe((data: {}) => {
					console.log(data, "get Employee::::");
					let emp = data[0];
					let employee = new employeeItem(emp.userId,
						emp.jobTitleName,
						emp.firstName,
						emp.lastName,
						emp.preferredFullName,
						emp.employeeCode,
						emp.region,
						emp.phoneNumber,
						emp.emailAddress
					);
					this.model = employee;
					this.isEdit = true;
					this.buttonText = "Update";
				});
			});
		}
	}
	
	addORUpdate(editForm) {
		console.log(editForm.controls);
		let formAttr = [] ;
		
		let emp = new employeeItem(editForm.controls.userId.value,
					editForm.controls.jobTitleName.value,
					editForm.controls.firstName.value,
					editForm.controls.lastName.value,
					editForm.controls.preferredFullName.value,
					editForm.controls.employeeCode.value,
					editForm.controls.region.value,
					editForm.controls.phoneNumber.value,
					editForm.controls.emailAddress.value);
		
		// 			console.log(emp, ">>>>>")
		// let normalEmp = {  userId: editForm.controls.userId.value,
		// 	jobTitleName:   editForm.controls.jobTitleName.value,
		// 	  firstName: editForm.controls.firstName.value,
		//    lastName:    editForm.controls.lastName.value,
		//    preferredFullName:    editForm.controls.preferredFullName.value,
		// 	employeeCode:   editForm.controls.employeeCode.value,
		// 	 region:  editForm.controls.region.value,
		// 	phoneNumber:   editForm.controls.phoneNumber.value,
		// 	emailAddress:   editForm.controls.emailAddress.value};
		if (this.isEdit) {
			this.updatesubscription = this.empS.updateEmployee(this.empCode, emp).subscribe((data: {}) => {
				this.router.navigate(["/employeeList"]);
			});
		} else {
			this.subscription = this.empS.addEmployee(emp).subscribe((data: {}) => {
				this.router.navigate(["/employeeList"]);
			});
		}
		
	}

	cancel(editForm) {
		editForm.reset();
	
		if (this.isEdit)
			this.router.navigate(["/employeeList"]);
		else
			this.router.navigate(["/"]);
	}


	ngOnDestroy() {
		//this.subscription.unsubscribe();
		//this.routeP.unsubscribe();
	}
}
