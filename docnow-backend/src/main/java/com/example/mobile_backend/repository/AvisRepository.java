package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.Avis;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AvisRepository extends MongoRepository<Avis, String> {
    List<Avis> findByMedecinId(String medecinId);
    List<Avis> findByPatientId(String patientId);
} 