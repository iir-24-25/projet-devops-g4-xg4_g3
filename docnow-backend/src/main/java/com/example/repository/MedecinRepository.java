package com.example.repository;

import com.example.model.Medecin;
import com.example.util.MongoUtil;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class MedecinRepository {
    private final MongoCollection<Document> collection;

    public MedecinRepository(MongoDatabase database) {
        this.collection = database.getCollection("medecins");
    }

    public List<Medecin> findAll() {
        List<Medecin> medecins = new ArrayList<>();
        collection.find().forEach(doc -> medecins.add(documentToMedecin(doc)));
        return medecins;
    }

    public Medecin findById(String id) {
        Document doc = collection.find(Filters.eq("_id", new ObjectId(id))).first();
        return doc != null ? documentToMedecin(doc) : null;
    }

    public Medecin findByEmail(String email) {
        Document doc = collection.find(Filters.eq("email", email)).first();
        return doc != null ? documentToMedecin(doc) : null;
    }

    public void save(Medecin medecin) {
        Document doc = new Document()
            .append("nom", medecin.getNom())
            .append("prenom", medecin.getPrenom())
            .append("email", medecin.getEmail())
            .append("password", medecin.getPassword())
            .append("telephone", medecin.getTelephone())
            .append("specialite", medecin.getSpecialite())
            .append("adresse", medecin.getAdresse());
        
        collection.insertOne(doc);
    }

    public void update(String id, Medecin medecin) {
        collection.updateOne(
            Filters.eq("_id", new ObjectId(id)),
            Updates.combine(
                Updates.set("nom", medecin.getNom()),
                Updates.set("prenom", medecin.getPrenom()),
                Updates.set("email", medecin.getEmail()),
                Updates.set("telephone", medecin.getTelephone()),
                Updates.set("specialite", medecin.getSpecialite()),
                Updates.set("adresse", medecin.getAdresse())
            )
        );
    }

    public void delete(String id) {
        collection.deleteOne(Filters.eq("_id", new ObjectId(id)));
    }

    private Medecin documentToMedecin(Document doc) {
        Medecin medecin = new Medecin();
        medecin.setId(doc.getObjectId("_id").toString());
        medecin.setNom(doc.getString("nom"));
        medecin.setPrenom(doc.getString("prenom"));
        medecin.setEmail(doc.getString("email"));
        medecin.setPassword(doc.getString("password"));
        medecin.setTelephone(doc.getString("telephone"));
        medecin.setSpecialite(doc.getString("specialite"));
        medecin.setAdresse(doc.getString("adresse"));
        return medecin;
    }
} 