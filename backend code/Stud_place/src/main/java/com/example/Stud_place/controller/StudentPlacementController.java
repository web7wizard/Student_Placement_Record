package com.example.Stud_place.controller;

import com.example.Stud_place.model.StudentPlacement;
import com.example.Stud_place.service.StudentPlacementService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/placements")
@CrossOrigin(origins = "*")
public class StudentPlacementController {

    private final StudentPlacementService service;
    
    public StudentPlacementController(StudentPlacementService service) {
        this.service = service;
    }

    @GetMapping
    public List<StudentPlacement> getAllPlacements() {
        return service.getAllPlacementsSortedByLpa();
    }

    @PostMapping
    public StudentPlacement addPlacement(@RequestBody StudentPlacement placement) {
        return service.savePlacement(placement);
    }
    
    @DeleteMapping("/{id}")
    public void deletePlacement(@PathVariable Long id) {
        service.deletePlacement(id);
    }

    /**
     * Handles GET requests to /api/placements/{id} for viewing details.
     */
    @GetMapping("/{id}")
    public StudentPlacement getPlacementById(@PathVariable Long id) {
        return service.getPlacementById(id);
    }

    /**
     * Handles PUT requests to /api/placements/{id} for updating.
     */
    @PutMapping("/{id}")
    public StudentPlacement updatePlacement(@PathVariable Long id, @RequestBody StudentPlacement placementDetails) {
        return service.updatePlacement(id, placementDetails);
    }
}