package com.example.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Patient extends User {
    private Date dateNaissance;
    private String adresse;
    private String telephone;
    
    public Patient(String username, String password, String nom, String prenom, String email, 
                  Date dateNaissance, String adresse, String telephone) {
        super(username, password, "PATIENT", nom, prenom, email);
        this.dateNaissance = dateNaissance;
        this.adresse = adresse;
        this.telephone = telephone;
    }
} 