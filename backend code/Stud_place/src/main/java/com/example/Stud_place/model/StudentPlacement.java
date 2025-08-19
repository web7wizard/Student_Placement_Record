package com.example.Stud_place.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class StudentPlacement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;
    private String company;
    private Double lpa;

    public StudentPlacement() {}

    public StudentPlacement(String name, String department, String company, Double lpa) {
        this.name = name;
        this.department = department;
        this.company = company;
        this.lpa = lpa;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public Double getLpa() { return lpa; }
    public void setLpa(Double lpa) { this.lpa = lpa; }
}
