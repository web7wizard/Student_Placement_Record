// src/app/components/employee-form/employee-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { StudentPlacementService } from '../../services/student-placement.service';
import { StudentPlacement } from '../../models/student-placement.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './stud-form.component.html',
  styleUrls: ['./stud-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  isEditMode = false;
  employeeId?: number;

  constructor(
    private fb: FormBuilder,
    private placementService: StudentPlacementService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      company: ['', Validators.required],
      lpa: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.employeeId = +id;
        this.placementService.getPlacementById(this.employeeId).subscribe((placement) => {
          this.employeeForm.patchValue(placement);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const placementData: StudentPlacement = this.employeeForm.value;
      if (this.isEditMode && this.employeeId) {
        this.placementService.updatePlacement(this.employeeId, placementData).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.placementService.addPlacement(placementData).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}