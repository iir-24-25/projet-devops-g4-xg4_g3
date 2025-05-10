package com.example.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Admin extends User {
    public Admin(String username, String password, String nom, String prenom, String email) {
        super(username, password, "ADMIN", nom, prenom, email);
    }
} 