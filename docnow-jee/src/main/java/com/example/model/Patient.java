package com.example.model;

import java.util.Date;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Patient extends User {
    private Date dateNaissance;
    private String adresse;
    private String telephone;

    public Patient(String id,
                   String username,
                   String password,
                   String role,
                   String nom,
                   String prenom,
                   String email,
                   Date dateNaissance,
                   String adresse,
                   String telephone) {
        super(id, username, password, role, nom, prenom, email);
        this.dateNaissance = dateNaissance;
        this.adresse       = adresse;
        this.telephone     = telephone;
    }

    public Patient(String username,
                   String password,
                   String nom,
                   String prenom,
                   String email,
                   Date dateNaissance,
                   String adresse,
                   String telephone) {
        super(username, password, "PATIENT", nom, prenom, email);
        this.dateNaissance = dateNaissance;
        this.adresse       = adresse;
        this.telephone     = telephone;
    }
}
