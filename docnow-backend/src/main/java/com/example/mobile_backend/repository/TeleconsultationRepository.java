package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.Teleconsultation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeleconsultationRepository extends MongoRepository<Teleconsultation, String> {
} 