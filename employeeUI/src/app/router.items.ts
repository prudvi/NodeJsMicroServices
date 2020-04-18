import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { BodyComponent } from './body/body.component';


  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
//import { BodyComponent } from './app.BodyComponent';

const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'employeeList', component: EmployeeListComponent },
    { path: 'employee/:id', component: EmployeeAddComponent },
    //{ path: 'employeeDelete/:id', component: EmployeeDeleteComponent },
    { path: 'addEmployee', component: EmployeeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}