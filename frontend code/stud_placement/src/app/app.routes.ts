// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/stud-list/stud-list.component';
import { EmployeeFormComponent } from './components/stud-form/stud-form.component';
import { EmployeeDetailComponent } from './components/stud-detail/stud-detail.component';

export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'create', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent },
  { path: 'details/:id', component: EmployeeDetailComponent },
  { path: '**', redirectTo: '' }
];