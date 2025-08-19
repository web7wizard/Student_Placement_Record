// src/app/services/student-placement.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentPlacement } from '../models/student-placement.model';

@Injectable({
  providedIn: 'root'
})
export class StudentPlacementService {
  private apiUrl = 'http://localhost:8081/api/placements';

  constructor(private http: HttpClient) {}

  getAllPlacements(): Observable<StudentPlacement[]> {
    return this.http.get<StudentPlacement[]>(this.apiUrl);
  }

  getPlacementById(id: number): Observable<StudentPlacement> {
    return this.http.get<StudentPlacement>(`${this.apiUrl}/${id}`);
  }

  addPlacement(placement: StudentPlacement): Observable<StudentPlacement> {
    return this.http.post<StudentPlacement>(this.apiUrl, placement);
  }

  updatePlacement(id: number, placement: StudentPlacement): Observable<StudentPlacement> {
    return this.http.put<StudentPlacement>(`${this.apiUrl}/${id}`, placement);
  }

  deletePlacement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}