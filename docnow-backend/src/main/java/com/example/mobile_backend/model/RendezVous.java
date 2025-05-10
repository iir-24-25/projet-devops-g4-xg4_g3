package com.example.mobile_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "rendezvous")
public class RendezVous {
    @Id
    private String id;
    private String patientId;
    private String medecinId;
    private Date dateHeure;
    private String statut;
    private String canalConsultation;

    // Getters & Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }
    public String getMedecinId() { return medecinId; }
    public void setMedecinId(String medecinId) { this.medecinId = medecinId; }
    public Date getDateHeure() { return dateHeure; }
    public void setDateHeure(Date dateHeure) { this.dateHeure = dateHeure; }
    public String getStatut() { return statut; }
    public void setStatut(String statut) { this.statut = statut; }
    public String getCanalConsultation() { return canalConsultation; }
    public void setCanalConsultation(String canalConsultation) { this.canalConsultation = canalConsultation; }
} 