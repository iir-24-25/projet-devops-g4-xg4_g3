package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.Paiement;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaiementRepository extends MongoRepository<Paiement, String> {
} 