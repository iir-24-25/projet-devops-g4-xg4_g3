package com.example.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Medecin extends User {
    private String specialite;
    private String telephone;
    private String adresse;

    public Medecin(String id,
                   String username,
                   String password,
                   String role,
                   String nom,
                   String prenom,
                   String email,
                   String specialite,
                   String telephone,
                   String adresse) {
        super(id, username, password, role, nom, prenom, email);
        this.specialite = specialite;
        this.telephone   = telephone;
        this.adresse     = adresse;
    }

    public Medecin(String username,
                   String password,
                   String nom,
                   String prenom,
                   String email,
                   String specialite,
                   String telephone,
                   String adresse) {
        super(username, password, "MEDECIN", nom, prenom, email);
        this.specialite = specialite;
        this.telephone   = telephone;
        this.adresse     = adresse;
    }
}
