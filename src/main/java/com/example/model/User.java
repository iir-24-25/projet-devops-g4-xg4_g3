package com.example.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String id;
    private String username;
    private String password;
    private String role; // ADMIN, MEDECIN, PATIENT
    private String nom;
    private String prenom;
    private String email;

    public User(String username, String password, String role, String nom, String prenom, String email) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
} 