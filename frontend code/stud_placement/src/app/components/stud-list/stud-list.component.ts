// src/app/components/employee-list/employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentPlacementService } from '../../services/student-placement.service';
import { StudentPlacement } from '../../models/student-placement.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  placements: StudentPlacement[] = [];

  constructor(private placementService: StudentPlacementService) {}

  ngOnInit(): void {
    this.placementService.getAllPlacements().subscribe((data) => {
      this.placements = data;
    });
  }

  deletePlacement(id: number): void {
    if (confirm('Are you sure you want to delete this placement record?')) {
      this.placementService.deletePlacement(id).subscribe(() => {
        this.placements = this.placements.filter((p) => p.id !== id);
      });
    }
  }
}