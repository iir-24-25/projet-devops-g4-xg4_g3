package com.example.mobile_backend.service;

import com.example.mobile_backend.model.Specialite;
import com.example.mobile_backend.repository.SpecialiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialiteService {
    @Autowired
    private SpecialiteRepository specialiteRepository;

    public List<Specialite> getAllSpecialites() {
        return specialiteRepository.findAll();
    }

    public Specialite addSpecialite(Specialite specialite) {
        return specialiteRepository.save(specialite);
    }

    public Specialite getByNom(String nom) {
        return specialiteRepository.findByNom(nom);
    }
} 