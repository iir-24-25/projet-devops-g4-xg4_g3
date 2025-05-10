package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.RendezVous;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RendezVousRepository extends MongoRepository<RendezVous, String> {
} 