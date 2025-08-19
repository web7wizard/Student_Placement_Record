package com.example.Stud_place.repository;

import com.example.Stud_place.model.StudentPlacement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentPlacementRepository extends JpaRepository<StudentPlacement, Long> {

    @Query("SELECT s FROM StudentPlacement s ORDER BY s.lpa DESC")
    List<StudentPlacement> findAllSortedByLpa();
}
