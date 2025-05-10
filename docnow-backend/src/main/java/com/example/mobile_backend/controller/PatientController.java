package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Patient;
import com.example.mobile_backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {
    @Autowired
    private PatientService service;

    @GetMapping
    public List<Patient> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Patient add(@RequestBody Patient patient) {
        return service.add(patient);
    }

    @GetMapping("/{id}")
    public Patient getById(@PathVariable String id) {
        return service.getById(id);
    }
} 