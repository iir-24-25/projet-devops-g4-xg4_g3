package com.example.mobile_backend.service;

import com.example.mobile_backend.model.ProfessionnelSante;
import com.example.mobile_backend.repository.ProfessionnelSanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionnelSanteService {
    @Autowired
    private ProfessionnelSanteRepository repository;

    public List<ProfessionnelSante> getAll() {
        return repository.findAll();
    }

    public ProfessionnelSante add(ProfessionnelSante medecin) {
        return repository.save(medecin);
    }

    public ProfessionnelSante getById(String id) {
        return repository.findById(id).orElse(null);
    }
} 