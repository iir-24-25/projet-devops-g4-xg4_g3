package com.example;

import com.example.model.Patient;
import org.junit.jupiter.api.Test;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

public class PatientTest {
    @Test
    void testPatientCreation() {
        Date dateNaissance = new Date();
        Patient patient = new Patient(
            "id123", "user1", "pass", "PATIENT", "Dupont", "Jean", "jean.dupont@email.com",
            dateNaissance, "1 rue de Paris", "0600000000"
        );

        assertEquals("id123", patient.getId());
        assertEquals("user1", patient.getUsername());
        assertEquals("Dupont", patient.getNom());
        assertEquals("Jean", patient.getPrenom());
        assertEquals("jean.dupont@email.com", patient.getEmail());
        assertEquals(dateNaissance, patient.getDateNaissance());
        assertEquals("1 rue de Paris", patient.getAdresse());
        assertEquals("0600000000", patient.getTelephone());
    }
} 