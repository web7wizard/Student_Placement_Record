// src/app/components/employee-detail/employee-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { StudentPlacementService } from '../../services/student-placement.service';
import { StudentPlacement } from '../../models/student-placement.model';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stud-detail.component.html',
  styleUrls: ['./stud-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  placement?: StudentPlacement;

  constructor(
    private placementService: StudentPlacementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.placementService.getPlacementById(+id).subscribe((data) => {
        this.placement = data;
      });
    }
  }
}