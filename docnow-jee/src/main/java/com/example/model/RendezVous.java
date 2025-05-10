package com.example.model;

import java.util.Date;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RendezVous {
    private String id;
    private String patientId;
    private String medecinId;
    private Date   date;
    private String heure;
    private String motif;
    private String statut; // CONFIRME, ANNULE, TERMINE

    public RendezVous(String id,
                      String patientId,
                      String medecinId,
                      Date date,
                      String heure,
                      String motif,
                      String statut) {
        this.id         = id;
        this.patientId  = patientId;
        this.medecinId  = medecinId;
        this.date       = date;
        this.heure      = heure;
        this.motif      = motif;
        this.statut     = statut;
    }
}
