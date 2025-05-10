package com.example.mobile_backend.service;

import com.example.mobile_backend.model.Favoris;
import com.example.mobile_backend.repository.FavorisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavorisService {
    @Autowired
    private FavorisRepository repository;

    public List<Favoris> getAll() {
        return repository.findAll();
    }

    public Favoris add(Favoris favoris) {
        return repository.save(favoris);
    }

    public Favoris getByUtilisateurId(String utilisateurId) {
        return repository.findByUtilisateurId(utilisateurId);
    }
} 