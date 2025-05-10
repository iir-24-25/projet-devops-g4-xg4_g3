package com.example.mobile_backend.service;

import com.example.mobile_backend.model.Patient;
import com.example.mobile_backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    private PatientRepository repository;

    public List<Patient> getAll() {
        return repository.findAll();
    }

    public Patient add(Patient patient) {
        return repository.save(patient);
    }

    public Patient getById(String id) {
        return repository.findById(id).orElse(null);
    }
} 