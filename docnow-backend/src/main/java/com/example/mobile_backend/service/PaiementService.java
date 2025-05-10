package com.example.mobile_backend.service;

import com.example.mobile_backend.model.Paiement;
import com.example.mobile_backend.repository.PaiementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaiementService {
    @Autowired
    private PaiementRepository repository;

    public List<Paiement> getAll() {
        return repository.findAll();
    }

    public Paiement add(Paiement paiement) {
        return repository.save(paiement);
    }

    public Paiement getById(String id) {
        return repository.findById(id).orElse(null);
    }
} 