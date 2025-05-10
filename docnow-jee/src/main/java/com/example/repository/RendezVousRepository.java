package com.example.repository;

import com.example.model.RendezVous;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class RendezVousRepository {
    private final MongoCollection<Document> collection;

    public RendezVousRepository(MongoDatabase database) {
        this.collection = database.getCollection("rendezvous");
    }

    public void save(RendezVous rendezVous) {
        Document doc = new Document()
            .append("patientId", rendezVous.getPatientId())
            .append("medecinId", rendezVous.getMedecinId())
            .append("date", rendezVous.getDate())
            .append("heure", rendezVous.getHeure())
            .append("motif", rendezVous.getMotif())
            .append("statut", rendezVous.getStatut());
        collection.insertOne(doc);
    }
} 