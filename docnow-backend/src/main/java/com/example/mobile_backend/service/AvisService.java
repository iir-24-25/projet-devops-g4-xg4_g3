package com.example.mobile_backend.service;

import com.example.mobile_backend.model.Avis;
import com.example.mobile_backend.repository.AvisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvisService {
    @Autowired
    private AvisRepository repository;

    public List<Avis> getAll() {
        return repository.findAll();
    }

    public Avis add(Avis avis) {
        return repository.save(avis);
    }

    public List<Avis> getByMedecinId(String medecinId) {
        return repository.findByMedecinId(medecinId);
    }

    public List<Avis> getByPatientId(String patientId) {
        return repository.findByPatientId(patientId);
    }
} 