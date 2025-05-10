package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {
} 