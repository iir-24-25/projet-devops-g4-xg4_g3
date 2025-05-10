package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.ProfessionnelSante;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfessionnelSanteRepository extends MongoRepository<ProfessionnelSante, String> {
} 