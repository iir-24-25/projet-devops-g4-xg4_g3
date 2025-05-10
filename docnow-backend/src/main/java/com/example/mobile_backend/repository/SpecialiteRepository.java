package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.Specialite;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SpecialiteRepository extends MongoRepository<Specialite, String> {
    Specialite findByNom(String nom);
} 