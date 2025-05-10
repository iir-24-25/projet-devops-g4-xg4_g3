package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Patient;
import com.example.mobile_backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class PatientLoginController {
    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/patient")
    public Patient loginPatient(@RequestBody Patient login) {
        return patientRepository.findAll().stream()
            .filter(p -> p.getEmail().equals(login.getEmail()) && p.getMotDePasse().equals(login.getMotDePasse()))
            .findFirst()
            .orElse(null);
    }
} 