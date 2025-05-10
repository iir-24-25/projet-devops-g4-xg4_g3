package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.Favoris;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FavorisRepository extends MongoRepository<Favoris, String> {
    Favoris findByUtilisateurId(String utilisateurId);
} 