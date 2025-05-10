package com.example.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RendezVous {
    private String id;
    private String patientId;
    private String medecinId;
    private Date date;
    private String heure;
    private String motif;
    private String statut; // CONFIRME, ANNULE, TERMINE
} 