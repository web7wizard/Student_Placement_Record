package com.example.Stud_place.service;

import com.example.Stud_place.model.StudentPlacement;
import com.example.Stud_place.repository.StudentPlacementRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentPlacementService {

    private final StudentPlacementRepository repository;

    public StudentPlacementService(StudentPlacementRepository repository) {
        this.repository = repository;
    }

    public List<StudentPlacement> getAllPlacementsSortedByLpa() {
        return repository.findAllSortedByLpa();
    }

    public StudentPlacement savePlacement(StudentPlacement placement) {
        return repository.save(placement);
    }

    public void deletePlacement(Long id) {
        repository.deleteById(id);
    }

    /**
     * Finds a single placement by its ID.
     * Throws an exception if the placement is not found.
     */
    public StudentPlacement getPlacementById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Placement not found with id: " + id));
    }

    /**
     * Updates an existing placement.
     */
    public StudentPlacement updatePlacement(Long id, StudentPlacement placementDetails) {
        // First, get the existing placement from the database
        StudentPlacement existingPlacement = getPlacementById(id);
        
        // Now, update its fields with the new details
        existingPlacement.setName(placementDetails.getName());
        existingPlacement.setDepartment(placementDetails.getDepartment());
        existingPlacement.setCompany(placementDetails.getCompany());
        existingPlacement.setLpa(placementDetails.getLpa());
        
        // Save the updated placement back to the database
        return repository.save(existingPlacement);
    }
}