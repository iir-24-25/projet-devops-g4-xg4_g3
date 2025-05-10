package com.example.mobile_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "favoris")
public class Favoris {
    @Id
    private String id;
    private String utilisateurId;
    private List<String> listeMedecins; // IDs des médecins favoris

    // Getters & Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getUtilisateurId() { return utilisateurId; }
    public void setUtilisateurId(String utilisateurId) { this.utilisateurId = utilisateurId; }
    public List<String> getListeMedecins() { return listeMedecins; }
    public void setListeMedecins(List<String> listeMedecins) { this.listeMedecins = listeMedecins; }
} 