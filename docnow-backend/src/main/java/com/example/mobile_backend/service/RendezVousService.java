package com.example.mobile_backend.service;

import com.example.mobile_backend.model.RendezVous;
import com.example.mobile_backend.repository.RendezVousRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RendezVousService {
    @Autowired
    private RendezVousRepository repository;

    public List<RendezVous> getAll() {
        return repository.findAll();
    }

    public RendezVous add(RendezVous rdv) {
        return repository.save(rdv);
    }

    public RendezVous getById(String id) {
        return repository.findById(id).orElse(null);
    }
} 