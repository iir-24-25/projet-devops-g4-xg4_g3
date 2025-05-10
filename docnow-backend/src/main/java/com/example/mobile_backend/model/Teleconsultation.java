package com.example.mobile_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teleconsultations")
public class Teleconsultation {
    @Id
    private String id;
    private String patientId;
    private String medecinId;
    private String canal;
    private String statut;
    private int duree;

    // Getters & Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }
    public String getMedecinId() { return medecinId; }
    public void setMedecinId(String medecinId) { this.medecinId = medecinId; }
    public String getCanal() { return canal; }
    public void setCanal(String canal) { this.canal = canal; }
    public String getStatut() { return statut; }
    public void setStatut(String statut) { this.statut = statut; }
    public int getDuree() { return duree; }
    public void setDuree(int duree) { this.duree = duree; }
} 