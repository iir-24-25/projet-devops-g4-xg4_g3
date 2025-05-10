package com.example.mobile_backend.service;

import com.example.mobile_backend.model.Teleconsultation;
import com.example.mobile_backend.repository.TeleconsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeleconsultationService {
    @Autowired
    private TeleconsultationRepository repository;

    public List<Teleconsultation> getAll() {
        return repository.findAll();
    }

    public Teleconsultation add(Teleconsultation teleconsultation) {
        return repository.save(teleconsultation);
    }

    public Teleconsultation getById(String id) {
        return repository.findById(id).orElse(null);
    }
} 